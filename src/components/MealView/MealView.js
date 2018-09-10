import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Typography, Button, Input, FormControl, Grid} from '@material-ui/core'; 

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
    navigateBack = () => {
        this.props.history.push('/');
    }
    sendMealToRedux = (event) => {
        event.preventDefault();
        console.log('in submitMeal');
        const action = {type: 'ADD_MEAL', payload: this.state.meal};
        console.log(this.state, action); 
        this.props.dispatch(action); 
        this.props.history.push('/taste'); 
    } // end sendMealToRedux 

    render(){
        console.log(this.state); 
        return(
            <div className="form-view">
             <Grid container spacing={16}>
             <Grid item xs={12}>
                <Typography variant='display1' align='center' gutterBottom>Hi, {this.props.reduxStore.feedback.name}! 
                What did you eat for dinner?</Typography>
                <FormControl>
                    <Input onChange={this.handleMealChange} required/> <br/>
                </FormControl>
                </Grid>
                    <Grid item xs={6}>
                    <Button variant="contained" onClick={this.navigateBack}>Back</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={this.sendMealToRedux}>Next</Button>
                </Grid>
                </Grid>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(MealView); 