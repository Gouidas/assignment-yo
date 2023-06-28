import React, { createContext, useState } from 'react';
import { colors } from '../constants';
import { ColorContextProps } from '../types/ColorContextProps';


// Create a context for managing color selection across components
export const ColorContext = createContext<ColorContextProps>({
  selectedColor: '',
  setSelectedColor: () => {},
});

// Color provider component wrapping the app to provide color state management
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // SelectedColor state managed within the provider
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};
