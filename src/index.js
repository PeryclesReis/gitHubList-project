import React from 'react';
import ReactDOM from 'react-dom/client';
import GHSearchProvider from "./provider/GHSearchProvider";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GHSearchProvider>
      <App />
    </ GHSearchProvider>
  </React.StrictMode>
);
