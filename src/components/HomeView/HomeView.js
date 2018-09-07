import React, {Component} from 'react'; 
import axios from 'axios'; 
import {connect} from 'react-redux'; 

class HomeView extends Component {
    constructor(){
        super(); 
        this.state = {
            meal: '',
        }
    }

    handleMealChange = (event) => {
        this.setState = {
            meal: event.target.value
        }
    }
    submitMeal = (event) => {
        event.preventDefault();
        axios({
            method: 'POST', 
        })
    }
    render(){
        return(
            <div>
            <input onChange={this.handleMealChange}/><button onClick={this.submitMeal}>Submit</button>
            </div>
        );
    }
}
export default HomeView; 