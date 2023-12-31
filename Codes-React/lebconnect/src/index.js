import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your App component
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure your HTML root element is defined with this ID
);

reportWebVitals();
