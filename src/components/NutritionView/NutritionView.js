import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography} from '@material-ui/core';

class NutritionView extends Component {
    constructor(){
        super();
    this.state = {
            nutrition: 10,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            nutrition: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'NUTRITION_RATING', payload: this.state.nutrition}; 
        this.props.dispatch(action); 
        this.props.history.push('/comments'); 
    }
    render(){
        return(
            <div>
            <Typography variant='display1' align='center' gutterBottom>How <span className="emphasis-word">nutritious </span>was your meal of {this.props.reduxStore.feedback.meal}?</Typography>
                <form>
                    <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                </form> <br/>
                <Typography variant='body2' align='center' gutterBottom>Rating: {this.state.nutrition}</Typography> <br/>
                <Button variant="contained" color="primary" onClick={this.sendValueToRedux}>Next</Button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(NutritionView); 