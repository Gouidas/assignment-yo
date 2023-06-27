import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useInterval } from '../../lib/hooks/useInterval';

type LoadingScreenProps = {
  svg: React.ReactElement;
  text?: string; // New prop for the text
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ svg, text }) => {
  const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']; // List of colors to cycle through
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Function to change the color of the logo
  const changeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  // Run the color change function every 1 second
  useInterval(changeColor, 1000);

  // Set the color of the SVG logo
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