import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QR from './QR';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QR />
    <App />
  </React.StrictMode>
);

