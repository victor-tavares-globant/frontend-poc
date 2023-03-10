import React from 'react';
import ReactDOM from 'react-dom/client';
import axe from '@axe-core/react';
import { App } from '@components';

import reportWebVitals from './reportWebVitals';

import './index.module.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
