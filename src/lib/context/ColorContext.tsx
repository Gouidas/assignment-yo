import React, { createContext, useState } from 'react';

interface ColorContextProps {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const colors = ["#E50914", "#56ffae", "#09f0ff", "#E87C03"];

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