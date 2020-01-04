import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Typography, Grid} from '@material-ui/core';
import Header from '../Header/Header';

class TasteView extends Component {
    constructor(){
        super();
    this.state = {
            taste: 0,
        }
    }
 
    handleRangeChange = (event) => {
        this.setState({
            taste: event.target.value,
        }); 
    }
    navigateBack = () => {
        this.props.history.push('/food'); 
    }
    sendValueToRedux = () => {
        const action = {type: 'TASTE_RATING', payload: this.state.taste}; 
        this.props.dispatch(action); 
        this.props.history.push('/texture'); 
    }

    render(){
        return(
            <div className="main">
          <Header/>
          <div className="flex-box flex-center">

          <h2>How <span className="emphasis-word">difficult </span>did you find {this.props.reduxStore.feedback.lesson} to be?</h2>
                    <div className="instructions">

                    </div>
                    <form>
                    <label>Terrible</label> <input value={this.state.taste} onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10" required/><label> Amazing</label>
                    </form><br/>
                <h2>Rating: {this.state.taste}</h2> <br/>
                
                    <Button variant="contained" onClick={this.navigateBack}>Back</Button>
                 
                    <Button variant="contained" color="secondary" onClick={this.sendValueToRedux}>Next</Button>
          </div>
              
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TasteView); 