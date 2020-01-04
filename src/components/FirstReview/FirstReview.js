import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from '../Header/Header';

class TasteView extends Component {
    constructor() {
        super();
        this.state = {
            examples: ['image1.png', 'image2.png'],
            open: false,
            image: '',
            selected: '', 
            questions: []
            
        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false, 
            image: ''
        })
    }
    handleRangeChange = (event) => {
        this.setState({
            taste: event.target.value,
        });
    }
    navigateBack = () => {
        this.props.history.push('/lesson');
    }
    selectProject = (example) => {
        this.props.dispatch({type: 'CHOOSE_LESSON', payload: example});
        this.setState({
            ...this.state, 
            selected: example
        })
    }
    sendValueToRedux = () => {
        const action = { type: 'SUBMIT_QUESTIONS', payload: this.state.questions };
        this.props.dispatch(action);
        if(this.props.reduxStore.feedback.lesson.length !== 0){
            this.props.history.push('/');
        } else {
            alert('Please choose a lesson.');
        }
       
    }

    render() {
        return (
            <div className="main">
                <Header />
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <h2>First impressions</h2>
                        <p> It is important to be constructive and ask clarifying questions of the designer. A critique should be beneficial to the designer so they can improve their work. </p>
                        <p>Choose one design sketch to focus on for the duration of this activity.</p>
                        <div className="flex-box flex-evenly">
                        {this.state.examples.map((ex, i) => {
                            return(
                                <div className="thumbnail" key={i}>
                                    {this.state.selected === ex ? ( <div className="flex-col selected-image"><img src={require(`../LessonView/${ex}`)} onClick={()=>this.setState({...this.state, open: true, image: ex})} alt={`example-work-${i+1}`}/><Button onClick={()=>this.selectProject('')}>undo</Button></div>):(<div className="flex-col"><img src={require(`../LessonView/${ex}`)} onClick={()=>this.setState({...this.state, open: true, image: ex})} alt={`example-work-${i+1}`}/>
                                   <Button color="secondary" onClick={()=>this.selectProject(ex)}>select</Button></div>)}
                                </div>
                            )
                        })}
                        </div>
                     <Dialog open={this.state.open} onClose={this.handleClose}>
                        <div className="dialog">
                            <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                            {this.state.image.length > 0 && <img src={require(`../LessonView/${this.state.image}`)}  className="full-img" alt="enlarged"/>}
                        </div>
                     </Dialog>

                    </div>
                        <div className="instructions column-6  text-left">
                            <h4>Assignment Prompt</h4>
                            <p></p>
                        </div>
                    </div>
            
                <div className="flex-box flex-center">

                    <h2> <span className="emphasis-word">difficult </span>did you find {this.props.reduxStore.feedback.lesson} to be?</h2>
                    <div className="instructions">

                    </div>
                    <form>
                        <label>Terrible</label> <input value={this.state.taste} onChange={this.handleRangeChange} className="slider" type="range" min="0" max="10" required /><label> Amazing</label>
                    </form><br />
                    <h2>Rating: {this.state.taste}</h2> <br />

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