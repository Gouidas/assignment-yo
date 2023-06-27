import { Movie } from "./Movie";
import { Actor } from "./Actor";

export interface MovieDetailsProps {
  movie: Movie;
  actors: Actor[];
  open: boolean;
  onClose: () => void;
}
