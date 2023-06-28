import { Actor } from "../../lib/types/Actor";
import { Movie } from "../../lib/types/Movie";
import MovieDetails from "../MovieDetails";
import MovieCard from "./MovieCard";

interface MovieCardsProps {
  movies: Movie[];
  selectedMovie: Movie | null;
  actors: Actor[] | null; // Change this line
  open: boolean;
  onClose: () => void;
  onHover: (hovered: boolean, index: number) => void;
  onClick: (id: number) => void;
  hoveredCardIndex: number | null;
}

const MovieCards: React.FC<MovieCardsProps> = ({ movies, selectedMovie, actors, open, onClose, onHover, onClick, hoveredCardIndex }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          index={index}
          totalItems={movies.length}
          onHover={onHover}
          onClick={() => onClick(movie.id)}
          hoveredCardIndex={hoveredCardIndex}
        />
      ))}
      {selectedMovie && actors && (
        <MovieDetails movie={selectedMovie} actors={actors} open={open} onClose={onClose} />
      )}
    </>
  );
};

export default MovieCards;
