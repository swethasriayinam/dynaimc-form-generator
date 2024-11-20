// src/index.tsx or src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css'; // Import the Tailwind and custom styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
