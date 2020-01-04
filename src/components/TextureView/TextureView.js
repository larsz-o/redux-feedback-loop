import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography, Grid} from '@material-ui/core';

class TextureView extends Component {
    constructor(){
        super();
    this.state = {
            texture: 0,
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
            <Grid container spacing={16}>
            <Grid item xs={12}>
            <h4>Ask a few clarifying questions</h4>
                            <p>Often times, when you are deep in a project, it can be difficult to get a bird's eye view to see what might be glaringly obvious to someone who is unfamiliar with the project. Posing the right questions will help your peers see what they might be missing or assuming their users will know. It is important to be constructive and ask clarifying questions of the designer.</p>
                            <p>In the input fields below, pose three questions for the creator of the design sketch you chose. To help get you going, I've created a few sentence starters for you. Feel free to use them or start from scratch.</p>
                            
            <Typography variant="display1" align='center' gutterBottom>How was the <span className="emphasis-word">texture </span>of {this.props.reduxStore.feedback.meal}?</Typography>
            <form>
                <label>Terrible</label> <input value={this.state.texture} onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10" required/><label> Amazing</label>
            </form> <br/>
            <Typography variant="body2" align='center' gutterBottom>Rating: {this.state.texture}</Typography> <br/>
            </Grid>
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