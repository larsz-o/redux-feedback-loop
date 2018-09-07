import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

class HomeView extends Component {
    constructor(){
        super(); 
    this.state = {
            meal: '',
            name: '', 
        }
    }
    handleMealChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            meal: event.target.value,
        });
    } // end handleMealChange
    handleNameChange = (event) => {
        console.log(event.target.value); 
        this.setState({
            name: event.target.value,
        });
    } // end handleMealChange

    submitMeal = (event) => {
        event.preventDefault();
        console.log('in submitMeal');
        const action = {type: 'ADD_MEAL', payload: this.state};
        console.log(this.state); 
        this.props.dispatch(action); 
        // this.props.history.push('/taste'); 
    } // end submitMeal 
    render(){
        console.log(this.state); 
        return(
            <div>
                <form onSubmit={this.submitMeal}>
                    <label>Name: </label><input onChange={this.handleNameChange}/>
                    <label>Meal: </label><input onChange={this.handleMealChange}/>
                    <button >Submit</button>
                </form>
            
            </div>
        );
    }
}
export default connect()(HomeView); 