import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { HashRouter, Route } from 'react-router-dom';

const Root = props => {
  let store = props.store;

  return (
    <Provider store={store}>
      <HashRouter>
      <App />
      </HashRouter>
    </Provider>
  );
};

export default Root; 