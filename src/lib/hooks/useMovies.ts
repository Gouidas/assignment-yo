import { useState } from "react";
import { Movie } from "../types/Movie";
import { getUpcomingMovies } from "../../api/tmdb";
import { useSort } from "./useSort";
import { useFetch } from "./useFetch";
import { MOVIES_SORTING_LIST } from "../constants";

export const useMovies = (handleError: (error: string) => void) => {
  const [movieSortKey, setMovieSortKey] = useState<
    "release_date" | "title" | "vote_average" | "popularity"
  >("release_date");

  const {
    data: movies,
    loading,
    error,
  } = useFetch<Movie[]>(getUpcomingMovies, handleError);

  const { sortedData: sortedMovies, setSortKey } = useSort<Movie>(
    movies || [],
    movieSortKey,
    MOVIES_SORTING_LIST as Array<keyof Movie>
  );
  // console.log("useMovies", movies, loading, setSortKey, error);
  return { movies: sortedMovies, loading, setSortKey, error };
};
