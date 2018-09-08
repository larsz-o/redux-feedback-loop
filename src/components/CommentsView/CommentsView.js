import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class CommentsView extends Component {
    constructor(){
        super();
    this.state = {
            comments: '',
        }
    }
    handleTextChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            comments: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'NEW_COMMENT', payload: this.state.comments}; 
        console.log(this.state.comments); 
        this.props.dispatch(action); 
        this.props.history.push('/submission');  
        // send the comments to the redux store
    }
    
    render(){
        return(
            <div>
                <h2>Do you have any comments about today's dinner of {this.props.reduxStore.feedback.meal}?</h2>
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