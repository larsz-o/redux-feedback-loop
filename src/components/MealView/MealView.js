import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 

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
        const action = {type: 'ADD_MEAL', payload: this.state};
        console.log(this.state); 
        this.props.dispatch(action); 
        this.props.history.push('/taste'); 
    } // end submitMeal 

    render(){
        console.log(this.state); 
        return(
            <div>
                <h2>Hi, {this.props.reduxStore.nameLog}. What did you eat for dinner?</h2>
                <form onSubmit={this.submitMeal}>
                    <label>Name: </label><input onChange={this.handleMealChange}/>
                    <button >Submit</button>
                </form>
            
            </div>
        );
    }
}
export default connect()(MealView); 