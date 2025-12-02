import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdventCalendar from './advent-calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdventCalendar />
  </React.StrictMode>
);
