import React, { useContext, useState, useRef, useEffect } from 'react';
import { Card, CardMedia, CardContent, Box, Typography } from '@mui/material';
import { EntityCardProps } from '../../lib/types/EntityCardProps';
import { ColorContext } from '../../lib/context/ColorContext';
import Trailer from './Trailer';
import { getMovieDetails } from '../../api/tmdb';
import { Movie } from '../../lib/types/Movie';
import { fetchAndUpdateDetails } from '../../lib/hooks/fetchAndUpdateDetails';

const EntityCard: React.FC<EntityCardProps> = ({
  movie,
  image,
  altText,
  children,
  onClick,
  selectedColorProp,
  overview,
  index,
  totalItems,
  onHover,
  disableHover = false,
}) => {
  const { selectedColor } = useContext(ColorContext);
  const selectedColorContext = selectedColor;

  const [isHovered, setIsHovered] = useState(false);
  const [translate, setTranslate] = useState<string>('');
  const [columns, setColumns] = useState(0);
  const disableHoverRef = useRef(disableHover);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  useEffect(() => {
    if (disableHover) return;
    const cardWidth = 200;
    const gapWidth = 16;
    const totalPadding = 2 * 16 * 3;
    let windowWidth = window.innerWidth;
    const calculatedColumns = Math.floor((windowWidth - totalPadding) / (cardWidth + gapWidth));
    setColumns(calculatedColumns);

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        windowWidth = window.innerWidth;
        const recalculatedColumns = Math.floor((windowWidth - totalPadding) / (cardWidth + gapWidth));
        setColumns(recalculatedColumns);

        // Reset the disable hover state
        disableHoverRef.current = recalculatedColumns === 1;
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (disableHover || columns === 1) {
      setTranslate('0');
      setIsHovered(false);
    }
  }, [columns, disableHover]);

  useEffect(() => {
    if (isHovered && !disableHover && movie) {
        const cachedMovie = localStorage.getItem(`movie-${movie.id}`);
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        if (cachedMovie) {
            const { details, timestamp } = JSON.parse(cachedMovie);

            // If the data is not older than one day, use it
            if (new Date().getTime() - timestamp < oneDay) {
                setMovieDetails(details);
            } else {
                fetchAndUpdateDetails(movie.id);
            }
        } else {
            fetchAndUpdateDetails(movie.id);
        }
    }
  }, [isHovered, disableHover, movie?.id]);

  const fetchAndUpdateDetails = (movieId: number) => {
    getMovieDetails(movieId)
        .then(details => {
            setMovieDetails(details);
            localStorage.setItem(`movie-${movieId}`, JSON.stringify({ details, timestamp: new Date().getTime() }));
        })
        .catch(error => console.error(error));
};

  const handleMouseEnter = () => {
    if (columns === 1 || disableHover) return;
    if (disableHoverRef.current) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      if (onHover) {
        onHover(true);
      }
      if (typeof index === 'number' && typeof totalItems === 'number') {
        const columnIndex = index % columns;

        if (columnIndex === 0) {
          setTranslate('110px');
        } else if ((index + 1) % columns === 0) {
          setTranslate('-110px');
        } else {
          setTranslate('0');
        }
        // If there is only one item in a row, log this information
        if (columns === 1) {
          console.log('Only one item in a row');
          disableHoverRef.current = true;
        }
      }
    }, 50);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTranslate('0');
    if (columns === 1 || disableHover) return;
    if (disableHoverRef.current) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }


    if (onHover) {
      onHover(false);
    }
  };

  return (
    <Box sx={{ width: '200px', height: '400px', margin: 'auto' }}>
      <Card
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: '200px',
          marginBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          overflow: 'hidden',
          transition: 'transform 0.2s ease-in-out',
          zIndex: isHovered ? 10 : 'auto',
          cursor: disableHover ? 'default' : 'pointer',
          '&:hover': {
            transform: disableHover || columns === 1
              ? 'none'
              : isHovered
              ? `translateX(${translate}) scale(1.25)`
              : 'scale(1)',
            width: disableHover || columns === 1 ? '200px' : '400px',
            height: 'auto',
          },
          boxShadow: '0px 2px 16px rgba(0, 0, 0, 1)',
          position: 'relative',
          left: isHovered && columns > 1 ? `calc(50% - 200px)` : 'auto',
          borderBottom: `2px solid ${selectedColorContext}`,
        }}
      >
        {isHovered && columns !== 1 ? (
          <Box>
            <Trailer movieId={movieDetails ? movieDetails.imdb_id : ""} fallbackImage={image} autoplay={true} />
            <Box
              onClick={onClick}
              sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                zIndex: '1',
                cursor: 'pointer',
              }}
            />
          </Box>
        ) : (
          <CardMedia
              component="img"
              image={image}
              alt={altText}
              loading="lazy"
              sx={{
                objectFit: 'cover',
                height: disableHoverRef.current ? '250px' : isHovered && columns !== 1 ? '400px' : '250px',
                width: disableHoverRef.current || (isHovered && columns === 1) ? '100%' : isHovered ? '200px' : '100%',
                transition: 'transform 0.2s ease-in-out',
                backgroundColor: selectedColorContext,
              }}
            />
        )}

        <CardContent
          sx={{ flex: '1 0 auto', padding: '1rem', maxWidth: '400px', backgroundColor: 'primary.main' }}
        >
          {children}
          {isHovered && overview && movie && !disableHoverRef.current && (
            <Box sx={{ flexGrow: 1, overflow: 'auto', maxHeight: '300px' }}>
              <Typography
                sx={{ color: 'gray', fontSize: '.7rem', marginTop: '.5rem', maxHeight: '100%', overflow: 'auto' }}
              >
                {overview}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default React.memo(EntityCard);
