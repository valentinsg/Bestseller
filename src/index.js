import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <App />   
  </React.StrictMode>
);