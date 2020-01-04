import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from '../Header/Header';

class QuestionsView extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            image: '',
            selected: '', 
            questions: [],
            input1: '1. What is the functionality of',
            input2: '2. What will the button',
            input3: '3. What do you expect will happen when'
            
        }
    }
    
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false, 
            image: ''
        })
    }
    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    }
    navTo = () => {
            this.props.history.push('/ratings');
    }
    navigateBack = () => {
        this.props.history.push('/ratings');
    }
    sendValueToRedux = () => {
        const action = { type: 'SUBMIT_QUESTIONS', payload: [this.state.input1, this.state.input2, this.state.input3] };
        this.props.dispatch(action);
        this.navTo();
    }

    render() {
        return (
            <div className="main">
                <Header className={this.props.reduxStore.home}/>
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <h2>Your Design Sketch</h2>
                        <div className="flex-box flex-evenly">
                        <div className="thumbnail column-6">
                            <img onClick={()=>this.setState({...this.state, open: true, image: this.props.reduxStore.feedback.lesson})} src={require(`../LessonView/${this.props.reduxStore.feedback.lesson}`)} alt="your lesson"/>
                        </div>
                        </div>
                     <Dialog open={this.state.open} onClose={this.handleClose}>
                        <div className="dialog">
                            <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                            {this.state.image.length > 0 && <img src={require(`../LessonView/${this.state.image}`)} className="full-img" alt="enlarged"/>}
                        </div>
                     </Dialog>
                    </div>
                        <div className="instructions column-6  text-left">
                            <h4>Pose some questions</h4>
                            <p>Asking a designer questions about their work is a very important way to provide feedback. Often times, designers get too deep into their work to see what they are missing or assuming. Ask direct, inquistive questions about your design sketch.</p>
                            <p>In the input fields below, post three questions about your design sketch. To help get you going, I've created a few sentence starters for you. Feel free to use them or start from scratch.</p>
                            <div className="flex-col column-12">
                            <input value={this.state.input1} onChange={(event)=>this.handleChangeFor(event, 'input1')} required/>
                            <input value={this.state.input2} onChange={(event)=>this.handleChangeFor(event, 'input2')} required/>
                            <input value={this.state.input3} onChange={(event)=>this.handleChangeFor(event, 'input3')} required/>
                            </div>
                            <div className="flex-box flex-center margin-top-15">
                            <Button variant="contained" color="secondary" onClick={()=>this.sendValueToRedux()}>Submit</Button>
                            </div>
                            
                           
                        </div>
                    </div>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(QuestionsView);