import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography, Grid} from '@material-ui/core';

class TasteView extends Component {
    constructor(){
        super();
    this.state = {
            taste: 0,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            taste: event.target.value,
        }); 
    }
    navigateBack = () => {
        this.props.history.push('/food'); 
    }
    sendValueToRedux = () => {
        const action = {type: 'TASTE_RATING', payload: this.state.taste}; 
        this.props.dispatch(action); 
        this.props.history.push('/texture'); 
    }

    render(){
        return(
            <div className="form-view">
                <Typography variant='display1' align='center' gutterBottom>How was the <span className="emphasis-word">taste </span>of {this.props.reduxStore.feedback.meal}?</Typography>
                    <form>
                    <label>Terrible</label> <input value={this.state.taste} onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                    </form><br/>
                <Typography variant='body2' align='center' gutterBottomRating>Rating: {this.state.taste}</Typography> <br/>
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
export default connect(mapReduxStoreToProps)(TasteView); 