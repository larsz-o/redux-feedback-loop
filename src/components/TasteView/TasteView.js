import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class TasteView extends Component {
    constructor(){
        super();
    this.state = {
            taste: 10,
        }
    }
 
    handleRangeChange = (event) => {
        console.log(event.target.value);
        this.setState({
            taste: event.target.value,
        }); 
    }
    sendValueToRedux = () => {
        const action = {type: 'TASTE_RATING', payload: this.state.taste}; 
        console.log(this.state.taste); 
        this.props.dispatch(action); 
        this.props.history.push('/texture'); 
    }

    render(){
        return(
            <div>
                <h2>How was the <span className="emphasis-word">taste </span>of {this.props.reduxStore.dinnerLog}?</h2>
                <form>
                    <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
                </form> 
               <p>Rating: {this.state.taste}</p> 
               <button onClick={this.sendValueToRedux}>Next</button>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TasteView); 