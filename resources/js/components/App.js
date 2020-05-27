import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
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
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);



