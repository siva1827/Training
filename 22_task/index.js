import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Rectangle from './Rectangle';
import Circle from'./Circle';
import Triangle from './Triangle';
import Square from './Square';
import Paralleogram from './Parallelogram';
import Rhombus from './Hexagon';
import reportWebVitals from './reportWebVitals';
import Squareclass from './Squareclass';
import Rectangle_class from './Rectangle_class';
import Circlec from './Circlec';
import Squarec from './Squareclass';
import Trianglec from './Trianglec';
import App from './App';
import Task_1 from './22_task/Task_1';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Task_1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
