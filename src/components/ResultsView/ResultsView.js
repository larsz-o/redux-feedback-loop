import React, {Component} from 'react'; 
import TableComponent from './TableComponent/TableComponent.js'; 
import {connect} from 'react-redux'; 
import axios from 'axios'; 

class ResultsView extends Component {

    componentDidMount(){
        this.getMealFeedbackHistory(); 
    }

    getMealFeedbackHistory = () => {
        axios({
            method: 'GET', 
            url: '/feedback'
        }).then((response) => {
            const mealFeedbackHistory = response.data;
            console.log(mealFeedbackHistory); 
            const action = {type: 'SET_HISTORY', payload: mealFeedbackHistory};
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error setting meal feedback history', error);
        })
    }
    // update the redux store with a new query calculatin the overall average score 
    
    render(){
        return(
            <div>
            <TableComponent/>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(ResultsView); 