import React, { useContext } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, styled } from '@mui/material';
import { SortSelectProps } from '../../lib/types/SortSelectProps';
import { ColorContext } from '../../lib/context/ColorContext';

const colors = ["#E50914", "#56ffae", "#09f0ff", "#E87C03"];

const SortSelect: React.FC<SortSelectProps> = ({ options, defaultValue, onChange, selectedColorProp, labelText, shouldUpdateContext }) => {
  const { selectedColor, setSelectedColor } = useContext(ColorContext);
  const selectedColorContext = selectedColor;

  const [value, setValue] = React.useState(defaultValue);

  const StyledFormControl = styled(FormControl)(({ theme }) => ({
    minWidth: '105px',
    '.MuiFormLabel-root.Mui-focused': {
      color: selectedColorContext,
    },
    '.MuiInputBase-root': {
      color: 'text.secondary', // default color
      '&.Mui-focused': {
        color: selectedColorContext, // color when focused
      },
      '& .MuiOutlinedInput-input': {
        padding: '8px 32px 8px 17px',
        textAlign: 'left',
        color: 'text.secondary', // default color
      },
      '&.Mui-focused .MuiOutlinedInput-input': {
        color: selectedColorContext, // color when focused
      },
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: selectedColorContext,
    },
    '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: selectedColorContext,
    },
    '.MuiSelect-root': {
      color: selectedColorContext,
      '&:hover': {
        backgroundColor: 'background.paper',
      },
    },
    '.MuiSelect-icon': {
        color: selectedColorContext,
    },
    backgroundColor: 'background.paper',
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme, color }) => {
    const contrastTextColor = theme.palette.getContrastText(color || '#E50914');
    const selectedAndHoverColor = shouldUpdateContext ? color : selectedColorContext; // Use selectedColorContext when shouldUpdateContext is false
    return {
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: selectedAndHoverColor,
        color: contrastTextColor,
      },
      '&:hover': {
        backgroundColor: selectedAndHoverColor,
        color: contrastTextColor,
      },
    };
  });
  

  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    color: 'text.secondary', // default color
    '&.Mui-focused': {
      color: selectedColorContext, // color when focused
    },
    top: '-10px',
    right: '-50px',
    textAlign: 'right'
  }));

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setValue(newValue);
  
    // Only update the context if shouldUpdateContext is true
    if (shouldUpdateContext) {
      if (selectedColorContext === selectedColor) {
        setSelectedColor(colors[options.findIndex(option => option.value === newValue)] || '#fff'); 
      }
    }
  
    onChange(newValue);
  };

  return (
    <StyledFormControl variant="outlined">
      <StyledInputLabel id="sort-select-label">{labelText}</StyledInputLabel>
      <Select
        labelId="sort-select-label"
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <StyledMenuItem
            key={option.value}
            value={option.value}
            color={colors[index % colors.length]}
          >
            {option.label}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default React.memo(SortSelect);