import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ColorChangingLogoProps } from '../../lib/types/ColorChangingLogoProps';

// This component takes an SVG Logo and changes its fill color based on the provided 'selectedColor' prop
const ColorChangingLogo: React.FC<ColorChangingLogoProps> = ({
  selectedColor,
}) => {
  return (
    <SvgIcon sx={{ fontSize: 80 }}>
      <Logo fill={selectedColor} />
    </SvgIcon>
  );
};

export default React.memo(ColorChangingLogo);