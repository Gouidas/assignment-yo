import { getMovieDetails } from "../../api/tmdb";

// Function to fetch movie details from the TMDB API and update the local storage cache.
// The movie details are stored in local storage to avoid additional network requests
// if the same movie details are needed again in the future.
export const fetchAndUpdateDetails = async (movieId: number) => {
  try {
    const details = await getMovieDetails(movieId);
    localStorage.setItem(
      `movie-${movieId}`,
      JSON.stringify({ details, timestamp: new Date().getTime() })
    );
    return details;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
