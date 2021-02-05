import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AdminPage from './pages/AdminPage'
//redux
import {applyMiddleware, createStore} from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
//thunk
import thunk from 'redux-thunk';


const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  );
ReactDOM.render(
  <Provider store={store}>
     <App  />
    </Provider>,
  document.getElementById('content') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
