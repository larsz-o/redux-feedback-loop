import React, {Component} from 'react'; 
import axios from 'axios'; 
import {connect} from 'react-redux'; 
import { Typography, Button } from '@material-ui/core';

class SubmissionView extends Component {
    componentDidMount(){
        this.postFeedbackToServer(); 
    }
    postFeedbackToServer = () => {
        const newFeedback = this.props.reduxStore.feedback; 
        console.log(newFeedback); 
        axios({
            method: 'POST',
            url: '/feedback',
            data: newFeedback
        }).then((response) => {
           console.log(response); 
        }).catch((error) => {
            console.log('Error posting feedback', error);
            alert('Your dinner rating did not post. Please try again.'); 
        })   
    }
    returnHome = () => {
        this.props.history.push('/'); 
    }
    render(){
        return(
            <div>
            <p>Thanks for rating your dinner! A complete log of all ratings can be found on the <a href='#/results'>Results</a> page</p>
            <Button variant="contained" color="primary" onClick={this.returnHome}>Return Home</Button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(SubmissionView); 