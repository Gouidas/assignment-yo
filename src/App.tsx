import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import ErrorSnackbar from './components/reusable/ErrorSnackbar';
import { useMovies } from './lib/hooks/useMovies';
import { useMovieDetails } from './lib/hooks/useMovieDetails';
import theme from './theme';
import { ColorContext } from './lib/context/ColorContext';
import { ReactComponent as Logo } from './assets/images/logo.svg';
import LoadingScreen from './components/reusable/LoadingScreen';
import Navbar from './components/Navbar';
import useErrors from './lib/hooks/useErrors';
import MovieCards from './components/cards/renderMovies';

const App: React.FC = () => {
  const { selectedColor } = useContext(ColorContext); 
  const { error: moviesError, handleError: handleMoviesError, resetError: resetMoviesError } = useErrors();
  const { error: detailsError, handleError: handleDetailsError, resetError: resetDetailsError } = useErrors();

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
      {moviesError ? <ErrorSnackbar open={!!moviesError} onClose={resetMoviesError} message={moviesError || ''} /> : null}
      {detailsError ? <ErrorSnackbar open={!!detailsError} onClose={resetDetailsError} message={detailsError || ''} /> : null}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          minHeight: '100vh',
          color: 'text.primary',
          marginTop: '100px',
          mx: 'auto'
        }}
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
            <MovieCards
              movies={movies}
              selectedMovie={selectedMovie}
              actors={actors}
              open={open}
              onClose={handleClose}
              onHover={handleCardHover}
              onClick={handleOpen}
              hoveredCardIndex={hoveredCardIndex}
            />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;