import { useEffect, useState } from "react";
import { Movie } from "../../lib/types/Movie";
import { getMovieDetails } from "../../api/tmdb";

const useCachedMovieDetails = (
  movie: Movie | undefined,
  disableHover: boolean
): Movie | null => {
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  useEffect(() => {
    if (!movie || disableHover) {
      setMovieDetails(null);
      return;
    }

    const cachedMovie = localStorage.getItem(`movie-${movie.id}`);
    const oneDay = 24 * 60 * 60 * 1000;

    if (cachedMovie) {
      const { details, timestamp } = JSON.parse(cachedMovie);

      if (new Date().getTime() - timestamp < oneDay) {
        setMovieDetails(details);
      } else {
        fetchAndUpdateDetails(movie.id);
      }
    } else {
      fetchAndUpdateDetails(movie.id);
    }
  }, [movie, disableHover]);

  const fetchAndUpdateDetails = (movieId: number) => {
    getMovieDetails(movieId)
      .then((details) => {
        setMovieDetails(details);
        localStorage.setItem(
          `movie-${movieId}`,
          JSON.stringify({ details, timestamp: new Date().getTime() })
        );
      })
      .catch((error) => console.error(error));
  };

  return movieDetails;
};

export default useCachedMovieDetails;
