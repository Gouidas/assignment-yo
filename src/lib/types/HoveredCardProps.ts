import { CardContainerProps } from "./CardContainerProps";
import { Movie } from "./Movie";

export interface HoveredCardProps extends CardContainerProps {
  movieDetails: Movie | null;
  image: string;
  translate: string;
}
