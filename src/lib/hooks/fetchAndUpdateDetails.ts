import { getMovieDetails } from "../../api/tmdb";

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
