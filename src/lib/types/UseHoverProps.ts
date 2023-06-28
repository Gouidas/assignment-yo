export interface UseHoverProps {
  columns: number;
  disableHover: boolean;
  disableHoverRef: React.MutableRefObject<boolean>;
  onHover?: (hovered: boolean) => void;
  index: number;
  totalItems: number;
}
