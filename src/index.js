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
    date: '',
    meal: '', 
};
const nameLog = (state = '', action) => {
    if(action.type === 'ADD_NAME'){
        return action.payload;
    } return state;
} // stores current user's name 

const dinnerLog = (state = blankFeedback, action) => {
    if(action.type === 'ADD_MEAL'){
        const newFeedback = {
            ...state,
            meal: action.payload
        }
         return newFeedback; 
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
    } else if (action.type === 'TEXTURE_RATING'){
        const newFeedback = {
            ...state,
            texture: action.payload,
        }
        return newFeedback;
    } else if (action.type === 'CREATIVITY_RATING') { 
        const newFeedback = {
            ...state,
            creativity: action.payload,
        }
        return newFeedback;
    } else if (action.type === 'NUTRITION_RATING'){
        const newFeedback = {
            ...state,
            nutrition: action.payload,
        }
        return newFeedback;
    } else if (action.type === 'NEW_COMMENT'){
        const newFeedback = {
            ...state,
            comments: action.payload,
        }
        return newFeedback;
    } 
    return state; 
}

const mealFeedbackHistory = (state = [], action ) => {
    if (action.type === 'SET_HISTORY'){
        return action.payload; 
    }  else if (action.type === 'SET_RATING'){
        return [...state, action.payload]; 
    }
    return state; 
}
const storeInstance = createStore (
    combineReducers({
        feedback, 
        dinnerLog, 
        nameLog, 
        mealFeedbackHistory
    }), 
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
