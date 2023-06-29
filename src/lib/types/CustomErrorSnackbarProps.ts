import { ErrorSnackbarProps } from "./ErrorSnackbarProps";

export interface CustomErrorSnackbarProps extends ErrorSnackbarProps {
  position?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
  };
}
