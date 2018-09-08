import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import {Provider} from 'react-redux'; 
import logger from 'redux-logger'; 

const blankFeedback = {
    taste: 0, 
    texture: 0,
    creativity: 0, 
    nutrition: 0, 
    comments: '', 
    flagged: false, 
    date: ''
};
const nameLog = (state = '', action) => {
    if(action.type === 'ADD_NAME'){
        return action.payload;
    } return state;
} // stores current user's name 

const dinnerLog = (state = '', action) => {
    if(action.type === 'ADD_MEAL'){
         return action.payload; 
    }
    return state; 
} // stores the current dinner entry 

const feedback = (state = blankFeedback, action ) => {
    if (action.type  === 'TASTE_RATING'){
        const newFeedback = {
            ...state,
            taste: action.payload,
        }
        return newFeedback;
    }
    return state; 
}
const storeInstance = createStore (
    combineReducers({
        feedback, 
        dinnerLog, 
        nameLog
    }), 
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
