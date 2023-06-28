import React from 'react';
import { Card } from '@mui/material';
import { CardContainerProps } from '../../lib/types/CardContainerProps';

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  onClick,
  handleMouseEnter,
  handleMouseLeave,
  selectedColorContext,
  cardWidth,
  translate,
}) => {

  return (
    <Card
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: cardWidth,
        marginBottom: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0px 2px 16px rgba(0, 0, 0, 1)',
        position: 'relative',
        borderBottom: `2px solid ${selectedColorContext}`,
        transform: `translateX(${translate})`,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      {children}
    </Card>
  );
};

export default CardContainer;
