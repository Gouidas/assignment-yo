import React, { useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { SectionWithItemsProps } from '../../lib/types/SectionWithItemsProps';

const SectionWithItems: React.FC<SectionWithItemsProps> = ({
  title,
  items,
  selectedColor,
}) => {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <Box
      sx={{
        marginBottom: '1rem',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {items.map((item) => {
          const isCurrentItemHovered = item.id === isHovered;
          if (item.type === 'chip') {
            return (
              <Chip
                key={item.id}
                label={isCurrentItemHovered ? item.name : item.name.length > 30 ? `${item.name.substring(0, 30)}...` : item.name}
                sx={{
                  backgroundColor: 'background.default',
                  color: 'text.secondary',
                  maxWidth: '150px',
                }}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(-1)}
              />
            );
          }
          if (item.type === 'image' && item.logo_path) {
            return (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.default',
                  color: selectedColor,
                  padding: '0.5rem',
                  alignItems: 'center',
                }}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <Typography
                  variant="body2"
                  sx={{
                    borderRadius: '6px',
                    color: 'text.secondary',
                  }}
                >
                  {item.name.length > 18 ? `${item.name.substring(0, 18)}...` : item.name}
                </Typography>
                <Box
                  component="img"
                  src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                  alt={item.name}
                  sx={{
                    height: '2.5rem',
                    backgroundColor: 'text.secondary',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    maxWidth: '100px',
                  }}
                />
              </Box>
            );
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

export default SectionWithItems;

