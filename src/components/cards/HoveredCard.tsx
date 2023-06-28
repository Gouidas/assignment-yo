import React from 'react';
import { CardContent, Box, Typography } from '@mui/material';
import Trailer from '../reusable/Trailer';
import CardContainer from './CardContainer';
import { HoveredCardProps } from '../../lib/types/HoveredCardProps';

const HoveredCard: React.FC<HoveredCardProps> = ({
  movieDetails,
  image,
  selectedColorContext,
  children,
  onClick,
  handleMouseEnter,
  handleMouseLeave,
  translate,
}) => (
  // HoveredCard extends from CardContainer but has additional features, such as showing movie trailer and overview.
  <CardContainer
    onClick={onClick}
    handleMouseEnter={handleMouseEnter}
    handleMouseLeave={handleMouseLeave}
    selectedColorContext={selectedColorContext}
    cardWidth='400px'
    translate={translate}
  >
    <Box>
      <Trailer movieId={movieDetails ? movieDetails.imdb_id : ''} fallbackImage={image} autoplay={true} />
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

    <CardContent
      sx={{ flex: '1 0 auto', padding: '1rem', maxWidth: '400px', backgroundColor: 'primary.main' }}
    >
      {children}
      {movieDetails && movieDetails.overview && (
        <Box sx={{ flexGrow: 1, overflow: 'auto', maxHeight: '300px' }}>
          <Typography
            sx={{ color: 'gray', fontSize: '.7rem', marginTop: '.5rem', maxHeight: '100%', overflow: 'auto' }}
          >
            {movieDetails.overview}
          </Typography>
        </Box>
      )}
    </CardContent>
  </CardContainer>
);

export default HoveredCard;
