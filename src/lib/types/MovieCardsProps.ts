import { Actor } from "./Actor";
import { Movie } from "./Movie";

export interface MovieCardsProps {
  movies: Movie[];
  selectedMovie: Movie | null;
  actors: Actor[] | null; // Change this line
  open: boolean;
  onClose: () => void;
  onHover: (hovered: boolean, index: number) => void;
  onClick: (id: number) => void;
  hoveredCardIndex: number | null;
}
