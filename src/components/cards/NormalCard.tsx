import React from 'react';
import { CardMedia, CardContent } from '@mui/material';
import CardContainer from './CardContainer';
import { NormalCardProps } from '../../lib/types/NormalCardProps';

const NormalCard: React.FC<NormalCardProps> = ({
  image,
  altText,
  selectedColorContext,
  children,
  onClick,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  // NormalCard extends from CardContainer and represents the default state of the card.
  <CardContainer
    onClick={onClick}
    handleMouseEnter={handleMouseEnter}
    handleMouseLeave={handleMouseLeave}
    selectedColorContext={selectedColorContext}
    cardWidth='200px'
  >
    <CardMedia
      component="img"
      image={image}
      alt={altText}
      loading="lazy"
      sx={{
        objectFit: 'cover',
        height: '250px',
        width: '100%',
        backgroundColor: selectedColorContext,
      }}
    />
    <CardContent
      sx={{ flex: '1 0 auto', padding: '1rem', maxWidth: '400px', backgroundColor: 'primary.main' }}
    >
      {children}
    </CardContent>
  </CardContainer>
);

export default NormalCard;