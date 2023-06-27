export interface SectionWithItemsProps {
  title: string;
  items: {
    id: number;
    name: string;
    logo_path?: string;
    type: "chip" | "image";
  }[];
  selectedColor: string;
}
