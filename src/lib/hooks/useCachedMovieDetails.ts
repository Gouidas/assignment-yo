import { useEffect, useState } from "react";
import { Movie } from "../../lib/types/Movie";
import { getMovieDetails } from "../../api/tmdb";

// This custom hook fetches movie details from local storage or, if not available, from the TMDB API.
// If the details are fetched from the API, they are cached in local storage for future use.
// The data in local storage is considered stale and refetched from the API if it is more than one day old.
// If the 'disableHover' flag is true, it immediately returns null and does not perform any operations.
const useCachedMovieDetails = (
  movie: Movie | undefined,
  disableHover: boolean,
  isHovered: boolean
): Movie | null => {
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  useEffect(() => {
    if (!movie || disableHover || !isHovered) {
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
  }, [movie, disableHover, isHovered]);

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
