import {combineReducers} from 'redux'; 

let blankFeedback = {
    name: '', 
    lesson: 'image1.png',
    positive: [],
    negative: [],
    questions: [],
    clarity: 0,
    creativity: 0,
    usability: 0,
    overall: 0, 
    
};
const feedback = (state = blankFeedback, action ) => {
    if(action.type === 'ADD_NAME'){
        return {
            ...state, 
            name: action.payload
        };
    } else if(action.type === 'CHOOSE_LESSON'){
        return {
             ...state,
             lesson: action.payload,
         };
        }
         else if (action.type === 'SUBMIT_POSITIVE'){
            return {
                ...state, 
                positive: action.payload,
         }
        }
         else if (action.type === 'SUBMIT_NEGATIVE'){
            return {
                ...state, 
                negative: action.payload,
         }
     } else if (action.type  === 'SUBMIT_QUESTIONS'){
      return  {
            ...state,
            questions: action.payload,
        }
    } else if (action.type === 'USABILITY_RATING'){
        return {
            ...state,
            usability: action.payload,
        }
    } else if (action.type === 'CREATIVITY_RATING') { 
        return {
            ...state,
            creativity: action.payload,
        }
    } else if (action.type === 'CLARITY_RATING'){
       return {
            ...state,
            clarity: action.payload,
        }
    } else if (action.type === 'OVERALL_RATING'){
        return {
            ...state,
            overall: action.payload,
        }
    }   else if (action.type === 'CLEAR_RATING'){
        return blankFeedback;
    }
    return state; 
}
const feedbackHistory = (state = [], action ) => {
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
    feedbackHistory, 
    home
}); 