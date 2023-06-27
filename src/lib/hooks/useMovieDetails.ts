import { useState, useCallback } from "react";
import { Actor } from "../types/Actor";
import { Movie } from "../types/Movie";
import { getMovieDetails, getActors } from "../../api/tmdb";

export const useMovieDetails = (handleError?: (error: string) => void) => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(
    async (movieId: number) => {
      setLoading(true);
      try {
        const [fetchedMovie, fetchedActors] = await Promise.all([
          getMovieDetails(movieId),
          getActors(movieId),
        ]);
        setSelectedMovie(fetchedMovie);
        setActors(fetchedActors);
        setOpen(true);
      } catch (err) {
        if (handleError) {
          handleError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  const handleClose = () => {
    setOpen(false);
    setSelectedMovie(null);
    setActors([]);
  };
  return {
    actors,
    selectedMovie,
    loading,
    open,
    handleOpen,
    handleClose,
  };
};
