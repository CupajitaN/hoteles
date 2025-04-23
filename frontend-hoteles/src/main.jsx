import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HotelProvider } from './store/HotelContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HotelProvider>
      <App />
    </HotelProvider>
  </React.StrictMode>,
);
