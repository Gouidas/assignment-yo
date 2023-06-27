import { ReactNode } from "react";

export interface DialogComponentProps {
  title: string;
  onClose: () => void;
  selectedColor: string;
  open: boolean;
  children: ReactNode;
}
