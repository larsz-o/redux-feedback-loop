import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

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
            <div>
                <h2>Hello! What's your name?</h2>
                <form onSubmit={this.submitMeal}>
                    <label>Name: </label><input onChange={this.handleNameChange}/>
                    <button >Submit</button>
                </form>
            
            </div>
        );
    }
}
export default connect()(HomeView); 