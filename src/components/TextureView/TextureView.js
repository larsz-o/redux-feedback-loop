import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

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
            <h2>How was the <span className="emphasis-word">texture </span>of {this.props.reduxStore.dinnerLog.meal}?</h2>
            <form>
                <label>Terrible</label> <input onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10"/><label> Amazing</label>
            </form> 
           <p>Rating: {this.state.texture}</p> 
           <button onClick={this.sendValueToRedux}>Next</button>
        </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TextureView); 