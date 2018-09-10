import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography, Grid} from '@material-ui/core';

class NutritionView extends Component {
    constructor(){
        super();
    this.state = {
            nutrition: '',
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            nutrition: event.target.value,
        }); 
    }
    navigateBack = () => {
        this.props.history.push('/creativity');
    }
    sendValueToRedux = () => {
        const action = {type: 'NUTRITION_RATING', payload: this.state.nutrition}; 
        this.props.dispatch(action); 
        this.props.history.push('/comments'); 
    }
    render(){
        return(
            <div className="form-view">
            <Typography variant='display1' align='center' gutterBottom>How <span className="emphasis-word">nutritious </span>was your meal of {this.props.reduxStore.feedback.meal}?</Typography>
                <form>
                    <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                </form> <br/>
                <Typography variant='body2' align='center' gutterBottom>Rating: {this.state.nutrition}</Typography> <br/>
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
export default connect(mapReduxStoreToProps)(NutritionView); 