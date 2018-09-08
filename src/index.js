import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import {Provider} from 'react-redux'; 
import logger from 'redux-logger'; 


const nameLog = (state = '', action) => {
    if(action.type === 'ADD_NAME'){
        return action.payload;
    } return state;
} // stores current user's name 

let blankFeedback = {
    taste: 0, 
    texture: 0,
    creativity: 0, 
    nutrition: 0, 
    comments: '', 
    flagged: false, 
    date: '',
    meal: '', 
    overall_rating: 0
};
const feedback = (state = blankFeedback, action ) => {
    if(action.type === 'ADD_MEAL'){
        return {
             ...state,
             meal: action.payload,
         }
     } else if (action.type  === 'TASTE_RATING'){
      return  {
            ...state,
            taste: action.payload,
            overall_rating: Number(state.overall_rating + action.payload)
        }
    } else if (action.type === 'TEXTURE_RATING'){
        return {
            ...state,
            texture: action.payload,
            overall_rating: Number(state.overall_rating + action.payload)
        }
    } else if (action.type === 'CREATIVITY_RATING') { 
        return {
            ...state,
            creativity: action.payload,
            overall_rating: Number(state.overall_rating + action.payload)
        }
    } else if (action.type === 'NUTRITION_RATING'){
       return {
            ...state,
            nutrition: action.payload,
            overall_rating: Number(state.overall_rating + action.payload)
        }
    } else if (action.type === 'NEW_COMMENT'){
        return {
            ...state,
            comments: action.payload,
        }
    }   
    return state; 
}
const mealFeedbackHistory = (state = [], action ) => {
    if (action.type === 'SET_HISTORY'){
       return action.payload;
    }
    return state; 
}
const storeInstance = createStore (
    combineReducers({
        feedback, 
        nameLog, 
        mealFeedbackHistory
    }), 
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
