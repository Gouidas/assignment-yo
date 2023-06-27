import React, { useEffect, useState } from 'react';
import { getMovieVideos } from '../../api/tmdb';
import { Box, CardMedia } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorSnackbar from './ErrorSnackbar';

interface TrailerProps {
  movieId: string;
  fallbackImage: string;
  autoplay?: boolean;
}

const Trailer: React.FC<TrailerProps> = ({ movieId, fallbackImage, autoplay }) => {
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  useEffect(() => {
    const fetchTrailerUrl = async () => {
      const cachedTrailerUrl = localStorage.getItem(`trailer-${movieId}-${autoplay}`);
      if (cachedTrailerUrl) {
        setTrailerUrl(cachedTrailerUrl);
        setIsLoading(false);
      } else {
        try {
          const videoData = await getMovieVideos(movieId);
          const baseEmbedUrl = `https://www.youtube.com/embed/${videoData[0]?.key}`;
          const autoplayUrl = `${baseEmbedUrl}?autoplay=1&controls=0&mute=1&modestbranding=1&showinfo=0&rel=0`;
          
          localStorage.setItem(`trailer-${movieId}-true`, autoplayUrl);
          localStorage.setItem(`trailer-${movieId}-false`, baseEmbedUrl);
  
          const embedUrl = autoplay ? autoplayUrl : baseEmbedUrl;
          setTrailerUrl(embedUrl);
          setIsLoading(false);
        } catch (error) {
          setTimeout(() => {
            setSnackbarOpen(true);
            setIsLoading(false);
          }, 1000);
        }
      }
    };
    fetchTrailerUrl();
  }, [movieId, autoplay]);

  const handleError = () => {
    setErrorLoading(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (isLoading) {
    return (
      <Box sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        image={fallbackImage}
        alt={movieId}
        sx={{ height: '250px' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    </Box>
    );
  }

  if (!trailerUrl || errorLoading) {
    return (
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={fallbackImage[0]}
          alt={movieId}
          sx={{ height: '250px' }}
        />
        <ErrorSnackbar 
          open={snackbarOpen} 
          onClose={handleSnackbarClose} 
          message="Error loading trailer." 
          position={{ vertical: 'top', horizontal: 'right' }} 
        />
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', paddingBottom: '56.25%' }}>
      <iframe 
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        src={trailerUrl} 
        title={`Trailer for ${movieId}`}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        onError={handleError}
      />
    </Box>
  );
};

export default Trailer;
