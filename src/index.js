import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Picture from './App';
import App2 from './App2';
import Web from './App3';
import App4 from './App4';
import Button from './App5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Picture />
    <App2/>
    <App4/>
    <Web/>
    <Button/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
