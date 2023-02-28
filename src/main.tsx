import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ClientProvider } from './context/clientContext';
import { TimesheetsProvider } from './context/timesheetsContext';
import 'react-tooltip/dist/react-tooltip.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <TimesheetsProvider>
          <App />
        </TimesheetsProvider>
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
