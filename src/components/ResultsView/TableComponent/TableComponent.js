import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRowComponent from '../TableRowComponent/TableRowComponent.js';
import {Table, TableBody, TableHead, TableCell, TableRow} from '@material-ui/core'; 
import axios from 'axios'; 

class TableComponent extends Component {

    componentDidMount(){
        this.getMealFeedbackHistory(); 
        }
    getMealFeedbackHistory = () => {
        axios({
            method: 'GET', 
            url: '/feedback'
        }).then((response) => {
            const mealFeedbackHistory = response.data;
            const action = {type: 'SET_HISTORY', payload: mealFeedbackHistory};
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error setting meal feedback history', error);
        })
    }
    render(){
        return(
        <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Meal</TableCell>
                        <TableCell>Taste</TableCell>
                        <TableCell>Texture</TableCell>
                        <TableCell>Creativity</TableCell>
                        <TableCell>Nutrition</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Overall Rating</TableCell>
                        <TableCell>Flag for Review</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.reduxStore.mealFeedbackHistory.map((dinner, i)=>{
                return (
                    <TableRowComponent i={i} dinner={dinner}/>
                        );
                    })} 
                </TableBody>
            </Table>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableComponent); 


        