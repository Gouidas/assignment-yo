import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorProvider } from './lib/context/ColorContext';

const Root = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <React.StrictMode>
      <ColorProvider>
        <App />
      </ColorProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);

reportWebVitals();
