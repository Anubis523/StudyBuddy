import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appReducer from './reducers/appReducer';
import cardFormReducer from './reducers/cardFormReducer'
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route} from 'react-router-dom'

const middleWare = applyMiddleware(thunk)

const rootReducer = combineReducers({
  base: appReducer,
  cardForm: cardFormReducer
})

const store = createStore(rootReducer, composeWithDevTools(middleWare))
ReactDOM.render(
<Provider store={store}>
  <Router>
    <Route path='/' component={App} />
  </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
