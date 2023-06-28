import React, { useEffect, useState } from 'react';
import { getMovieVideos } from '../../api/tmdb';
import { Box, CardMedia } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { TrailerProps } from '../../lib/types/TrailerProps';


const Trailer: React.FC<TrailerProps> = ({ movieId, fallbackImage, autoplay }) => {
    // Maintain the state of the trailer URL, loading status, and error
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  useEffect(() => {
    const fetchTrailerUrl = async () => {
      // Check for cached trailer URL
      const cachedTrailerUrl = localStorage.getItem(`trailer-${movieId}-${autoplay}`);
      if (cachedTrailerUrl) {
        setTrailerUrl(cachedTrailerUrl);
        setIsLoading(false);
      } else {
        try {
          // Fetch video data from TMDB API
          const videoData = await getMovieVideos(movieId);
          const baseEmbedUrl = `https://www.youtube.com/embed/${videoData[0]?.key}`;
          const autoplayUrl = `${baseEmbedUrl}?autoplay=1&controls=0&mute=1&modestbranding=1&showinfo=0&rel=0`;
          
          // Cache the trailer URLs for later use
          localStorage.setItem(`trailer-${movieId}-true`, autoplayUrl);
          localStorage.setItem(`trailer-${movieId}-false`, baseEmbedUrl);
  
          const embedUrl = autoplay ? autoplayUrl : baseEmbedUrl;
          setTrailerUrl(embedUrl);
          setIsLoading(false);
        } catch (error) {
           // In case of error, open the snackbar and stop loading
          setSnackbarOpen(true);
          setIsLoading(false);
        }
      }
    };
    // Trigger the fetching of the trailer URL
    fetchTrailerUrl();
  }, [movieId, autoplay]);

  const handleError = () => {
    // Set error loading state to true when an error occurs
    setErrorLoading(true);
  };

  if (isLoading) {
    // Display a circular progress component until the trailer is loaded
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
    // Display fallback image if trailer URL is not found or an error occurred
    return (
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={fallbackImage}
          alt={movieId}
          sx={{ height: '250px' }}
        />
      </Box>
    );
  }

  // Display the fetched trailer
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
