import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar/index.js'
import { IoAddCircleOutline } from "react-icons/io5";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <IoAddCircleOutline />
  </React.StrictMode>
);