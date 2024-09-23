import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';


const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);

