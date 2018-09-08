import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import axios from 'axios'; 

class CommentsView extends Component {
    constructor(){
        super();
    this.state = {
            comments: 10,
        }
    }
 
    handleTextChange = (event) => {
        this.setState({
            comments: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'NEW_COMMENT', payload: this.state.comments}; 
        this.props.dispatch(action); 
        // send the comments to the redux store then POST the whole feedback object to the server 
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxStore.feedback
        }).then((response) => {
            this.props.history.push('/submission'); 
        }).catch((error) => {
            console.log('Error posting feedback', error);
        })   
    }
    render(){
        return(
            <div>
                <h2>Do you have any comments about today's dinner of {this.props.reduxStore.dinnerLog.meal}?</h2>
                <textarea onChange={this.handleTextChange} rows="4" cols="50"/><br/>
                <button onClick={this.sendValueToRedux}>Submit</button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(CommentsView); 