import React, { useContext, useState, useCallback } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress, Typography, ThemeProvider, SvgIcon  } from '@mui/material';
import ErrorSnackbar from './components/reusable/ErrorSnackbar';
import EntityCard from './components/reusable/EntityCard';
import MovieDetails from './components/MovieDetails';
import { useMovies } from './lib/hooks/useMovies';
import { useMovieDetails } from './lib/hooks/useMovieDetails';
import { Movie } from './lib/types/Movie';
import theme from './theme';
import { ColorContext } from './lib/context/ColorContext';
import { ReactComponent as Logo } from './assets/images/logo.svg';
import LoadingScreen from './components/reusable/LoadingScreen';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const { selectedColor, setSelectedColor } = useContext(ColorContext); 
  const [moviesError, setMoviesError] = useState<string | null>(null);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  const handleMoviesError = useCallback((error: string) => {
    setMoviesError(error);
  }, []);

  const handleDetailsError = useCallback((error: string) => {
      setDetailsError(error);
  }, []);
  const { movies, loading: moviesLoading, setSortKey } = useMovies(handleMoviesError);
  const { actors, selectedMovie, loading: detailsLoading, open, handleOpen, handleClose } = useMovieDetails(handleDetailsError);

  const loading = moviesLoading || detailsLoading;

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const handleCardHover = (hovered: boolean, index: number) => {
    setHoveredCardIndex(hovered ? index : null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {moviesLoading || detailsLoading ? <LoadingScreen svg={<Logo />} text='Assignment' /> : null}
      {moviesError ? <ErrorSnackbar open={!!moviesError} onClose={() => setMoviesError(null)} message={moviesError || ''} /> : null}
      {detailsError ? <ErrorSnackbar open={!!detailsError} onClose={() => setDetailsError(null)} message={detailsError || ''} /> : null}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          minHeight: '100vh',
          color: 'text.primary',
          marginTop: '100px',
          mx: 'auto'
        }}
        maxWidth="xl"
      >
        <Navbar setSortKey={setSortKey} selectedColor={selectedColor}/>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '1fr',
            gap: '1rem',
            padding: '2rem',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          {loading ? (
            <LoadingScreen svg={<Logo />} text='Assignment' />
          ) : (
            <>
              {movies.map((movie: Movie, index: number) => (
                <EntityCard
                  key={movie.id}
                  movie={movie}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  altText={movie.title}
                  onClick={() => handleOpen(movie.id)}
                  selectedColorProp={selectedColor}
                  overview={movie.overview}
                  index={index}
                  totalItems={movies.length} 
                  onHover={(hovered) => handleCardHover(hovered, index)}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {hoveredCardIndex === index && movie.title}
                    {hoveredCardIndex !== index && (movie.title.length > 21 ? `${movie.title.substring(0, 21)}...` : movie.title)}
                  </Typography>
                  <Typography variant="subtitle2">{movie.release_date}</Typography>
                  <Typography variant="subtitle2">
                    {movie.vote_average} ({movie.vote_count} votes)
                  </Typography>
                </EntityCard>
              ))}
              {selectedMovie && actors && (
                <MovieDetails movie={selectedMovie} actors={actors} open={open} onClose={handleClose} />
              )}
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;