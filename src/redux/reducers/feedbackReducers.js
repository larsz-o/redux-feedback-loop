import {combineReducers} from 'redux'; 

let blankFeedback = {
    taste: 0, 
    texture: 0,
    creativity: 0, 
    nutrition: 0, 
    comments: '', 
    flagged: false, 
    date: '',
    meal: '', 
    overall_rating: 0, 
    name: '', 
};
const feedback = (state = blankFeedback, action ) => {
    if(action.type === 'ADD_NAME'){
        return {
            ...state, 
            name: action.payload
        };
    } else if(action.type === 'ADD_LESSON'){
        return {
             ...state,
             meal: action.payload,
         }
     } else if (action.type  === 'DIFFICULTY_RATING'){
      return  {
            ...state,
            taste: action.payload,
            overall_rating: Number(state.overall_rating) + Number(action.payload)
        }
    } else if (action.type === 'LEARNING_RATING'){
        return {
            ...state,
            texture: action.payload,
            overall_rating: Number(state.overall_rating) + Number(action.payload)
        }
    } else if (action.type === 'CREATIVITY_RATING') { 
        return {
            ...state,
            creativity: action.payload,
            overall_rating: Number(state.overall_rating) + Number(action.payload)
        }
    } else if (action.type === 'COLLABORATION_RATING'){
       return {
            ...state,
            nutrition: action.payload,
            overall_rating: Number(state.overall_rating) + Number(action.payload)
        }
    } else if (action.type === 'NEW_COMMENT'){
        return {
            ...state,
            comments: action.payload,
        }
    }   else if (action.type === 'CLEAR_RATING'){
        return blankFeedback;
    }
    return state; 
}
const mealFeedbackHistory = (state = [], action ) => {
    if (action.type === 'SET_HISTORY'){
       return action.payload;
    }
    return state; 
}
const home = (state = true, action) => {
    if (action.type === 'NAV_TO_FEEDBACK'){
        return false;
    } else {
        return state;
    }
}
export default combineReducers({
    feedback,  
    mealFeedbackHistory, 
    home
}); 