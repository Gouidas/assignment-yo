import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useInterval } from '../../lib/hooks/useInterval';
import { colors } from '../../lib/constants';
import { LoadingScreenProps } from '../../lib/types/LoadingScreenProps';

// Loading screen component that changes color every second
const LoadingScreen: React.FC<LoadingScreenProps> = ({ svg, text }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  useInterval(changeColor, 1000);

  const clonedSvg = React.cloneElement(svg, {
    fill: colors[currentColorIndex],
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: '#141414',
      }}
    >
      <Box
        sx={{
          width: '200px',
        }}
      >
        {clonedSvg}
      </Box>
      {text && (
        <Box
          sx={{
            color: '#ffffff',
            fontSize: '18px',
            textAlign: 'center',
          }}
        >
          {text}
        </Box>
      )}
    </Box>
  );
};

export default LoadingScreen;