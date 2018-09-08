import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

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
                <h2>How <span className="emphasis-word">creative </span>was your meal of {this.props.reduxStore.feedback.meal}?</h2>
                     <form>
                        <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                    </form> 
                <p>Rating: {this.state.creativity}</p> 
                <button onClick={this.sendValueToRedux}>Next</button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(CreativityView); 