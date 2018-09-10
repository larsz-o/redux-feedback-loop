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
    // sortBy functions do GET requests to sort all table data by different columns  
    sortByDate = () => {
        toggleOrder.toggle = !toggleOrder.toggle; 
        axios({
            method: 'PUT', 
            url: '/sort/date/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
    sortByTaste = () => {
        toggleOrder.toggle = !toggleOrder.toggle;  
        axios({
            method: 'PUT', 
            url: '/sort/taste/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
    sortByTexture = () => {
        toggleOrder.toggle = !toggleOrder.toggle; 
        axios({
            method: 'PUT', 
            url: '/sort/texture/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
    sortByCreativity = () => {
        toggleOrder.toggle = !toggleOrder.toggle;  
        axios({
            method: 'PUT', 
            url: '/sort/creativity/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
     sortByNutrition = () => {
        toggleOrder.toggle = !toggleOrder.toggle;  
        axios({
            method: 'PUT', 
            url: '/sort/nutrition/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
     sortByOverall = () => {
        toggleOrder.toggle = !toggleOrder.toggle; 
        axios({
            method: 'PUT', 
            url: '/sort/overall/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
     sortByName = () => {
        toggleOrder.toggle = !toggleOrder.toggle; 
        axios({
            method: 'PUT', 
            url: '/sort/name/', 
            data: toggleOrder
        }).then((response) => {
            const sortedRatings = response.data;
            const action = {type: 'SET_HISTORY', payload: sortedRatings}; 
            this.props.dispatch(action); 
        }).catch((error) => {
            console.log('Error sorting ratings data', error);
        })
    } 
     sortByMeal = () => {
        toggleOrder.toggle = !toggleOrder.toggle; 
        axios({
            method: 'PUT', 
            url: '/sort/meal/', 
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
        <Grid>
            <GridItem xs={12}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><TableSortLabel onClick={this.sortByName}>Name</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByMeal}>Meal</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByDate}>Date</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByTaste}>Taste</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByTexture}>Texture</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByCreativity}>Creativity</TableSortLabel></TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByNutrition}>Nutrition</TableSortLabel></TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell><TableSortLabel onClick={this.sortByOverall}>Overall Rating</TableSortLabel></TableCell>
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
            </GridItem>
        </Grid>
        
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableComponent); 


        