import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ErrorSnackbarProps } from '../../lib/types/ErrorSnackbarProps'; 
import { ColorContext } from '../../lib/context/ColorContext'; 

interface CustomErrorSnackbarProps extends ErrorSnackbarProps {
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right' | 'center';
  };
}

const ErrorSnackbar: React.FC<CustomErrorSnackbarProps> = ({ open, onClose, message, position }) => {
  const { selectedColor } = useContext(ColorContext);
  const anchorOrigin = position || { vertical: 'bottom', horizontal: 'left' };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} 
      anchorOrigin={anchorOrigin}>
      <Alert onClose={position ? undefined : onClose} severity="error" sx={{ width: '100%', bgcolor: selectedColor, color: '#FFFFFF' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;