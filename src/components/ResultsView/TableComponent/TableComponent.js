import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRowComponent from '../TableRowComponent/TableRowComponent.js';
import {Table, TableBody, TableHead, TableSortLabel, TableCell, TableRow, Grid} from '@material-ui/core'; 
import axios from 'axios'; 

const toggleOrder = {toggle: false}; 
class TableComponent extends Component {

    componentDidMount(){
        this.getMealFeedbackHistory(); 
        }
    // getMealFeedbackHistory gets all data, unsorted
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
     sortBy = (type) => {
        toggleOrder.toggle = !toggleOrder.toggle; 
        axios({
            method: 'PUT', 
            url: `/sort?type=${type}`, 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
   
    render(){
        return(
        <Grid container spacing={16} xs={12}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("name")}>Name</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("meal")}>Meal</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("date")}>Date</TableSortLabel></TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell><TableSortLabel onClick={()=> this.sortBy("overall_rating")}>Overall Rating</TableSortLabel></TableCell>
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
            </Grid>
        
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableComponent); 


        