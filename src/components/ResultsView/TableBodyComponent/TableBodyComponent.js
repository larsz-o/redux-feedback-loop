import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'; 
import {TableBody, TableCell, TableRow} from '@material-ui/core'; 
import Delete from '@material-ui/icons/Delete'; 

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
    }).then((error) => {
        console.log('Error getting current ratings data', error);
    })
} // gets the latest ratings data, dispatches that to the redux store
    componenTableCellidMount(){
        this.getCurrentRatingData();
    }

    handleDelete = (id) => {
        
    }   
render(){
    return (
        <TableBody>
            {this.props.reduxStore.mealFeedbackHistory.map((dinner, i)=>{
                return (
                <TableRow key={i}>
                    <TableCell>{dinner.name}</TableCell>
                    <TableCell>{dinner.meal}</TableCell>
                    <TableCell>{dinner.taste}</TableCell>
                    <TableCell>{dinner.texture}</TableCell>
                    <TableCell>{dinner.creativity}</TableCell>
                    <TableCell>{dinner.nutrition}</TableCell>
                    <TableCell>{dinner.comments}</TableCell>
                    <TableCell>{dinner.overall_rating}</TableCell>
                    <TableCell><Delete onClick={this.handleDelete}/></TableCell>
                    {/* - fill in with icon that clicks to delete the entry in the database then re-runs redux store dispatch */}
                </TableRow> 
                );
            })}  
        </TableBody>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableBodyComponent); 