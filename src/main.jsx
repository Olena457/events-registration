import React from 'react';
import ReactDOM from 'react-dom/client';
import { EventsProvider } from './contexts/EventsContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EventsProvider>
  </React.StrictMode>
);
