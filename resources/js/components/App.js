import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useHistory } from 'react-router-dom';
import history from '../history.js';
import { Routes } from '../components';

const App = () => {
  return (
    <div>
{/*      <Navbar /> */}
      <Routes />
    </div>
  )
};

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("app")
);



