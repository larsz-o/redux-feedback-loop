import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography, Grid} from '@material-ui/core';

class TextureView extends Component {
    constructor(){
        super();
    this.state = {
            texture: '',
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            texture: event.target.value,
        }); 
    }
    navigateBack = () => {
        this.props.history.push('/taste');
    }
    sendValueToRedux = () => {
        const action = {type: 'TEXTURE_RATING', payload: this.state.texture}; 
        this.props.dispatch(action); 
        this.props.history.push('/creativity'); 
    }
    render(){
        return(
            <div className="form-view">
            <Typography variant="display1" align='center' gutterBottom>How was the <span className="emphasis-word">texture </span>of {this.props.reduxStore.feedback.meal}?</Typography>
            <form>
                <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
            </form> <br/>
            <Typography variant="body2" align='center' gutterBottom>Rating: {this.state.texture}</Typography> <br/>
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
export default connect(mapReduxStoreToProps)(TextureView); 