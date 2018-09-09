import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {FormControl, Typography, Input, Button} from '@material-ui/core'; 

class CommentsView extends Component {
    constructor(){
        super();
    this.state = {
            comments: '',
        }
    }
    handleClick = (event) => {
        console.log('you clicked', event.target.value);
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
                <Typography variant='display1' align='center' gutterBottom>Do you have any comments about today's dinner of {this.props.reduxStore.feedback.meal}?</Typography>
                <FormControl>
                <Input rows={4} rowsMax={6} onChange={this.handleTextChange}/><br/>
                <Button variant="contained" color="primary" onClick={this.sendValueToRedux}>Submit</Button>
                </FormControl>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(CommentsView); 