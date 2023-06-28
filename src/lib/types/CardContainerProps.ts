import { MouseEventHandler, ReactNode } from "react";

export interface CardContainerProps {
  children: ReactNode;
  onClick?: MouseEventHandler;
  handleMouseEnter?: MouseEventHandler;
  handleMouseLeave?: MouseEventHandler;
  selectedColorContext: string;
  cardWidth: string;
  translate?: string;
}
