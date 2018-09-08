import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

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
            <h2>How <span className="emphasis-word">nutritious </span>was your meal of {this.props.reduxStore.feedback.meal}?</h2>
                <form>
                    <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                </form> 
                <p>Rating: {this.state.nutrition}</p> 
                <button onClick={this.sendValueToRedux}>Next</button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(NutritionView); 