import React, { createContext, useState } from 'react';
import { colors } from '../constants';
interface ColorContextProps {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorContext = createContext<ColorContextProps>({
  selectedColor: '',
  setSelectedColor: () => {},
});

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};