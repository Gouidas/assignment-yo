import { SvgIcon } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

type ColorChangingLogoProps = {
  selectedColor: string;
};

const ColorChangingLogo: React.FC<ColorChangingLogoProps> = ({
  selectedColor,
}) => {
  return (
    <SvgIcon sx={{ fontSize: 80 }}>
      <Logo fill={selectedColor} />
    </SvgIcon>
  );
};

export default ColorChangingLogo;