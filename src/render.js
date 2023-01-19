import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { addPost } from './Redux/State';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

