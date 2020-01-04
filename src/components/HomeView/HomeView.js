import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Input, FormControl } from '@material-ui/core';
import Header from '../Header/Header';
class HomeView extends Component {
    constructor() {
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

    submitName = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_NAME', payload: this.state.name };
        console.log(this.state);
        this.props.dispatch(action);
        this.props.history.push('/lesson');
    } // end submitMeal 
    render() {

        return (
            <div className="main">
                <Header className={this.props.home} />
                <div className="flex-box flex-evenly form-zone">
                    <div className="center">
                        <h2>Instructions</h2>
                    </div>
                    <div className="instructions column-6 text-left">
                        <p>Critique is an important part of the design process and it will be central to your career as a UX designer. Later in the week, you will be critiquing your classmates' work in our Moodle discussion forum. While we all have plenty of experience giving and receiving feedback, we aren't always trained to give constructive, direct feedback about our peers' work. For this reason, we will be practicing giving feedback before we jump into the critique assignment.</p>
                        <p>In this activity, you will practice giving constructive feedback to a sample project on this website. Your responses will be recorded, so please be collegial. The goal is not to find every error, but to begin to get comfortable with the practice of giving feedback. This activity should take you about 30 minutes to complete.</p>
                        <p>To get started, please enter your name.</p>
                        <div className="flex-box flex-center">
                            <FormControl>
                                <Input aria-label="name" className="margin-top-15" placeholder="Enter your name" value={this.state.name} onChange={this.handleNameChange} required /> <br /><br />
                                <Button color="secondary" variant="contained" onClick={this.submitName}>Submit</Button>
                            </FormControl>
                        </div>

                    </div>
                </div>

            </div>


        );
    }
}
const mapStateToProps = state => ({
    home: state.home
})
export default connect(mapStateToProps)(HomeView); 