import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import {Provider} from 'react-redux'; 
import logger from 'redux-logger'; 

const dinnerLog = (state = '', action) => {
    return state; 
} // stores the current dinner entry 

const newFeedback = {
    taste: 0, 
    texture: 0,
    creativity: 0, 
    nutrition: 0, 
    comments: '', 
    flagged: false, 
    date: ''
};

const feedback = (state = newFeedback, action ) => {
    return state; 
}
const storeInstance = createStore (
    combineReducers({
        dinnerLog,
        feedback
    }), 
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
