import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'; 
import {TableCell, TableRow} from '@material-ui/core'; 
import Delete from '@material-ui/icons/Delete'; 
import './TableRow.css'; 
import moment from 'moment'; 

class TableBodyComponent extends Component {
    componenTableCellidMount(){
        this.getCurrentRatingData();
    }
    // getCurrentRatingData gets all data without sorting 
    getCurrentRatingData = () => {
    axios({
        method: 'GET', 
        url: '/feedback'
    }).then((response) => {
        const ratings = response.data;
        const action = {type: 'SET_HISTORY', payload: ratings}; 
        this.props.dispatch(action); 
    }).catch((error) => {
        console.log('Error getting current ratings data', error);
    })
} // gets the latest ratings data, dispatches that to the redux store
    flagFeedback = () => {
        console.log('in flag feedback');
        let id = this.props.dinner.id; 
        axios({
            method: 'PUT', 
            url: '/feedback/' + id,
        }).then((response) => {
            this.getCurrentRatingData();
        }).catch((error) => {
            console.log('Error flagging entry for review', error);
        })
    }
    handleDelete = () => { 
        if (window.confirm(`Are you sure you want to delete ${this.props.dinner.meal}?`)){
            let id = this.props.dinner.id;
            axios({
                method: 'DELETE', 
                url: '/feedback/' + id,
            }).then((response)=>{
                this.getCurrentRatingData();
            }).catch((error) => {
                alert('Error deleting!');
                console.log('Error deleting item', error); 
            })
        }
    } 
  
render(){
    return (
                <TableRow className={this.props.dinner.flagged.toString()} key={this.props.i}>
                    <TableCell>{this.props.dinner.name}</TableCell>
                    <TableCell>{this.props.dinner.meal}</TableCell>
                    <TableCell>{moment(this.props.dinner.date).format('MM/DD/YYYY')}</TableCell>
                    <TableCell>{this.props.dinner.comments}</TableCell>
                    <TableCell>{this.props.dinner.overall_rating}</TableCell>
                    <TableCell><img src="../../../../images/flag.svg" alt="feedback required icon" onClick={this.flagFeedback}></img></TableCell>
                    <TableCell><Delete onClick={this.handleDelete}/></TableCell>
                </TableRow> 
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TableBodyComponent); 