import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography, Grid} from '@material-ui/core';

class CreativityView extends Component {
    constructor(){
        super();
    this.state = {
            creativity: 0,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            creativity: event.target.value,
        }); 
    }
    navigateBack = () => {
        this.props.history.push('/texture');
    }
    sendValueToRedux = () => {
        const action = {type: 'CREATIVITY_RATING', payload: this.state.creativity}; 
        this.props.dispatch(action); 
        this.props.history.push('/nutrition'); 
    }
    render(){
        return(
            <div className="form-view">
                <Typography variant='display1' align='center' gutterBottom>How <span className="emphasis-word">creative </span>was your meal of {this.props.reduxStore.feedback.meal}?</Typography>
                       <form>
                       <label>Terrible</label> <input value={this.state.creativity} onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label><br/>
                       </form>
                    <Typography variant='body2' align='center' gutterBottom>Rating: {this.state.creativity}</Typography> <br/>
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                    <Button variant="contained" onClick={this.navigateBack}>Back</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={this.sendValueToRedux}>Next</Button>
                </Grid>
                </Grid>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(CreativityView); 