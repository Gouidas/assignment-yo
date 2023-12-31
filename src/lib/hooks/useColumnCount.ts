import { useState, useEffect, useRef } from "react";
import { calculateColumns } from "./calculateColumns";

// This custom hook calculates the number of columns that can be displayed based on the current window width.
// It responds to window resize events and recalculates the column count.
// It also sets the 'disableHover' flag to true if only one column can be displayed.
// This flag can be used to disable hover effects on the cards for mobile and other narrow displays.
const useColumnCount = (disableHover: boolean) => {
  const cardWidth = 200;
  const gapWidth = 16;
  const totalPadding = 2 * 16 * 3;
  const [columns, setColumns] = useState(0);
  const disableHoverRef = useRef(disableHover);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (disableHover) return;
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        const windowWidth = window.innerWidth;

        const recalculatedColumns = calculateColumns(
          windowWidth,
          cardWidth,
          gapWidth,
          totalPadding
        );
        setColumns(recalculatedColumns);
        disableHoverRef.current = recalculatedColumns === 1;
      }, 200);
    };

    handleResize(); // Call handleResize immediately to set the initial column count

    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [disableHover, totalPadding, cardWidth, gapWidth]);

  return { columns, disableHoverRef };
};

export default useColumnCount;
