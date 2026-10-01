
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx'; // Import the new provider

import './assets/styles/global.css';
import './assets/styles/layout.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>  {/* Wrap the App inside the LanguageProvider */}
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);