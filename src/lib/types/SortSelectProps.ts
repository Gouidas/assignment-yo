export interface SortSelectProps {
  options: { value: string; label: string }[];
  defaultValue: string;
  onChange: (value: string | number) => void;
  selectedColorProp?: string;
  labelText: string;
  shouldUpdateContext?: boolean;
}
