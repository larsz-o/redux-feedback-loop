import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography} from '@material-ui/core';

class CreativityView extends Component {
    constructor(){
        super();
    this.state = {
            creativity: 10,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            creativity: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'CREATIVITY_RATING', payload: this.state.creativity}; 
        this.props.dispatch(action); 
        this.props.history.push('/nutrition'); 
    }
    render(){
        return(
            <div>
                <Typography variant='display1' align='center' gutterBottom>How <span className="emphasis-word">creative </span>was your meal of {this.props.reduxStore.feedback.meal}?</Typography>
                        <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label><br/>
                    <Typography variant='body2' align='center' gutterBottom>Rating: {this.state.creativity}</Typography> <br/>
                <Button variant="contained" color="primary"onClick={this.sendValueToRedux}>Next</Button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(CreativityView); 