import { useState, useRef, useEffect } from "react";
import { UseHoverProps } from "../types/UseHoverProps";

// This hook handles the hover state for an element. It handles the behavior when the mouse enters
// and leaves the element. It can be used to implement hover effects or tooltips.
const useHover = ({
  columns,
  disableHover,
  disableHoverRef,
  onHover,
  index,
  totalItems,
}: UseHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [translate, setTranslate] = useState("0");

  const handleMouseEnter = () => {
    if (columns === 1 || disableHover || disableHoverRef.current) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      if (onHover) {
        onHover(true);
      }
      const isLastItemInRow =
        index === totalItems - 1 || index % columns === columns - 1;

      if (isLastItemInRow) {
        setTranslate("-160px");
      } else {
        setTranslate("0");
      }
    }, 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (columns === 1 || disableHover || disableHoverRef.current) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (onHover) {
      onHover(false);
    }
  };

  useEffect(() => {
    if (disableHover || columns === 1) {
      setIsHovered(false);
    }
  }, [columns, disableHover]);

  return { isHovered, handleMouseEnter, handleMouseLeave, translate };
};

export default useHover;
