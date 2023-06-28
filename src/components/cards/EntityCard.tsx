import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { EntityCardProps } from '../../lib/types/EntityCardProps';
import { ColorContext } from '../../lib/context/ColorContext';
import NormalCard from './NormalCard';
import HoveredCard from './HoveredCard';
import useCachedMovieDetails from '../../lib/hooks/useCachedMovieDetails';
import useColumnCount from '../../lib/hooks/useColumnCount';
import useHover from '../../lib/hooks/useHover';
import { UseHoverProps } from '../../lib/types/UseHoverProps';

const EntityCard: React.FC<EntityCardProps> = ({
  movie,
  image,
  altText,
  children,
  onClick,
  index,
  totalItems,
  onHover,
  disableHover = false,
}) => {
  const { selectedColor } = useContext(ColorContext);
  const { columns, disableHoverRef } = useColumnCount(disableHover);
  const hoverProps: UseHoverProps = {
    columns,
    disableHover,
    disableHoverRef,
    onHover,
    index,
    totalItems,
  };
  const { isHovered, handleMouseEnter, handleMouseLeave, translate } = useHover(hoverProps);
  const movieDetails = useCachedMovieDetails(movie, disableHover);

  return (
    <Box
        sx={{
            width: '200px', 
            height: '400px', 
            margin: 'auto',
            position: 'relative', // This ensures z-index is effective
            zIndex: isHovered ? 2 : 1, // Conditional z-index based on hover
        }}
    >
        {!isHovered || columns === 1 || disableHover ? (
            <NormalCard
                cardWidth="200"
                image={image}
                altText={altText}
                selectedColorContext={selectedColor}
                onClick={onClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            >
                {children}
            </NormalCard>
        ) : (
            <HoveredCard
                cardWidth="400"
                movieDetails={movieDetails}
                image={image}
                selectedColorContext={selectedColor}
                onClick={onClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                translate={translate}
            >
                {children}
            </HoveredCard>
        )}
    </Box>
  );

};

export default React.memo(EntityCard);
