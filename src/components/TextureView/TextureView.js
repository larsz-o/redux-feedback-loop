import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography} from '@material-ui/core';

class TextureView extends Component {
    constructor(){
        super();
    this.state = {
            texture: 10,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            texture: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'TEXTURE_RATING', payload: this.state.texture}; 
        this.props.dispatch(action); 
        this.props.history.push('/creativity'); 
    }
    render(){
        return(
            <div>
            <Typography variant="display1" align='center' gutterBottom>How was the <span className="emphasis-word">texture </span>of {this.props.reduxStore.feedback.meal}?</Typography>
            <form>
                <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
            </form> <br/>
            <Typography variant="body2" align='center' gutterBottom>Rating: {this.state.texture}</Typography> <br/>
           <Button variant="contained" color="primary" onClick={this.sendValueToRedux}>Next</Button>
        </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TextureView); 