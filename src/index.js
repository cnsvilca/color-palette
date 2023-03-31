import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ColorPalettesProvider } from './context/ColorPalettesContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { FiltersProvider } from './context/FiltersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ColorPalettesProvider>
          <FavoriteProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </FavoriteProvider>
        </ColorPalettesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
