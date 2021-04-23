import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { temp, battery, humidity, pressure } from './model.jsx';
import { createStore, combineReducers } from 'redux'

import { Provider } from 'react-redux'

const allReducers = combineReducers({
    temp, battery, humidity, pressure
});

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
