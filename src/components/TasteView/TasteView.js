import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography} from '@material-ui/core';

class TasteView extends Component {
    constructor(){
        super();
    this.state = {
            taste: 10,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            taste: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'TASTE_RATING', payload: this.state.taste}; 
        this.props.dispatch(action); 
        this.props.history.push('/texture'); 
    }

    render(){
        return(
            <div>
                <Typography variant='display1' align='center' gutterBottom>How was the <span className="emphasis-word">taste </span>of {this.props.reduxStore.feedback.meal}?</Typography>
                    <form>
                    <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                    </form>
                <Typography variant='body2' align='center' gutterBottomRating>Rating: {this.state.taste}</Typography> 
               <Button variant="contained" color="primary"onClick={this.sendValueToRedux}>Next</Button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TasteView); 