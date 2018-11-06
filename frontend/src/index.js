import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appReducer from './reducers/appReducer';

import * as serviceWorker from './serviceWorker';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeAll = composeEnhancer(applyMiddleware(thunk))
const store = createStore(appReducer, {currentUser:{}, currentDeck:{}, currentCard:{}}, composeAll())
ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
