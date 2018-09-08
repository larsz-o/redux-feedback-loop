import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'; 

class TableBodyComponent extends Component {
getCurrentRatingData = () => {
    console.log('in getcurrentratingdata');
    axios({
        method: 'GET', 
        url: '/feedback'
    }).then((response) => {
        const ratings = response.data;
        const action = {type: 'SET_HISTORY', payload: ratings}; 
        this.props.dispatch(action); 
        this.getTotalsData();
    }).then((error) => {
        console.log('Error getting current ratings data', error);
    })
} // gets the latest ratings data, dispatches that to the redux store, and calls getTotalsData which calculates each
// meal's ratings
getTotalsData = () => {
    console.log('in getTotalsData');
    axios({
            method: 'GET', 
            url: '/feedback/totals'
        }).then((response) => {
            const totals = response.data;
            console.log(totals); 
            const action = {type: 'SET_RATING', payload: totals}; 
            this.props.dispatch(action); 
        }).then((error) => {
            console.log('Error getting current totals data', error);
        })
}
componentDidMount(){
   this.getCurrentRatingData();
}
render(){
    return (
        
        <tbody>
            {this.props.reduxStore.mealFeedbackHistory.map((dinner, i)=>{
                return (
                <tr key={i}>
                    <td>{dinner.meal}</td>
                    <td>{dinner.taste}</td>
                    <td>{dinner.texture}</td>
                    <td>{dinner.creativity}</td>
                    <td>{dinner.nutrition}</td>
                    <td>{dinner.comments}</td>
                    <td>{dinner.total}</td>
                    {/*  need to calculate with SQL query */}
                    <td>Delete</td>
                    {/* - fill in with icon that clicks to delete the entry in the database then re-runs redux store dispatch */}
                </tr> 
                );
            })}  
        </tbody>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableBodyComponent); 