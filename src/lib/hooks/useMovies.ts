import { useState } from "react";
import { Movie } from "../types/Movie";
import { getUpcomingMovies } from "../../api/tmdb";
import { useSort } from "./useSort";
import { useFetch } from "./useFetch";
import { MOVIES_SORTING_LIST } from "../constants";

// This hook manages the movies list, which fetches the data and handles the sorting of the list.
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
  return { movies: sortedMovies, loading, setSortKey, error };
};
