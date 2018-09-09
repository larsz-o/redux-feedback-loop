import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import { Typography, Button, Input, FormControl} from '@material-ui/core';

class HomeView extends Component {
    constructor(){
        super(); 
    this.state = {
            name: '', 
        }
    }
    
    handleNameChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            name: event.target.value,
        });
    } // end handleMealChange

    submitMeal = (event) => {
        event.preventDefault();
        console.log('in submitMeal');
        const action = {type: 'ADD_NAME', payload: this.state.name};
        console.log(this.state); 
        this.props.dispatch(action); 
        this.props.history.push('/food'); 
    } // end submitMeal 
    render(){
        console.log(this.state); 
        return(
            <div className="form-view">
                <Typography variant='display1' align='center' gutterBottom>Hello! What's your name?</Typography>
                <FormControl >
                    <Input onChange={this.handleNameChange} required/><br/><br/>    
                    <Button variant="contained" color="secondary" onClick={this.submitMeal}>Submit</Button>
                </FormControl>
               
            </div>
        );
    }
}
export default connect()(HomeView); 