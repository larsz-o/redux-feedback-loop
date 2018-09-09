import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Typography, Button, Input, FormControl} from '@material-ui/core'; 

class MealView extends Component {
    constructor(){
        super(); 
    this.state = {
            meal: '', 
        }
    }

    handleMealChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            meal: event.target.value,
        });
    } // end handleMealChange

    submitMeal = (event) => {
        event.preventDefault();
        console.log('in submitMeal');
        const action = {type: 'ADD_MEAL', payload: this.state.meal};
        console.log(this.state, action); 
        this.props.dispatch(action); 
        this.props.history.push('/taste'); 
    } // end submitMeal 

    render(){
        console.log(this.state); 
        return(
            <div className="form-view">
                <Typography variant='display1' align='center' gutterBottom>Hi, {this.props.reduxStore.feedback.name}! 
                What did you eat for dinner?</Typography>
                <FormControl>
                    <Input onChange={this.handleMealChange} required/> <br/>
                    <Button variant="contained" color="secondary" onClick={this.submitMeal}>Submit</Button>
                </FormControl>
            
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(MealView); 