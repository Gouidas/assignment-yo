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

// MovieCards component is responsible for rendering all the movie cards and the MovieDetails component.
const MovieCards: React.FC<MovieCardsProps> = ({ movies, selectedMovie, actors, open, onClose, onHover, onClick, hoveredCardIndex }) => {
  // Here, we're mapping over the list of movies and creating a MovieCard component for each.
  // Notice that we're passing the onHover and onClick handlers to each MovieCard.
  // We also render the MovieDetails component when a movie is selected and actors data is available.
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
