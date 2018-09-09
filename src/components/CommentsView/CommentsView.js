import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {FormControl, Typography, Input, Button, Grid} from '@material-ui/core'; 

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
    navigateBack = () => {
        this.props.history.push('/nutrition'); 
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
            <div className="form-view">
                <Typography variant="display1" align="center" gutterBottom>Do you have any comments about today's dinner of {this.props.reduxStore.feedback.meal}?</Typography>
                <FormControl>
                <textarea onChange={this.handleTextChange}/><br/>
                </FormControl>
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                    <Button variant="contained" onClick={this.navigateBack}>Back</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={this.sendValueToRedux}>Submit</Button>
                </Grid>
                </Grid>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(CommentsView); 