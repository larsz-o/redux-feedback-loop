import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from '../Header/Header';

class NegativeView extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            image: {image: '', video: ''},
            selected: '', 
            input1: '1. One problem I see',
            input2: '2. I am confused by',
            input3: '3. I think a better choice would be',
            videoShow: true
            
        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false, 
            image: {image: '', video: ''}
        })
    }
    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    }
    navTo = () => {
        this.props.history.push('/questions');
    }
    navigateBack = () => {
        this.props.history.push('/positive');
    }
    sendValueToRedux = () => {
        const action = { type: 'SUBMIT_NEGATIVE', payload: [this.state.input1, this.state.input2, this.state.input3] };
        this.props.dispatch(action);
        this.navTo();  
    }

    render() {
        return (
            <div className="main">
                <Header className={this.props.reduxStore.home}/>
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4 column-md-6">
                        <h2>Your Design Sketch</h2>
                        <div className="flex-box flex-evenly">
                        <div className="thumbnail column-6 column-md-10">
                            <img onClick={()=>this.setState({...this.state, open: true, image: this.props.reduxStore.feedback.lesson})} src={require(`../LessonView/${this.props.reduxStore.feedback.lesson.image}`)} alt="your lesson"/>
                        </div>
                        </div>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <div className="dialog">
                                <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                                {this.state.videoShow ? (<div><h3>Walk-Through Demo</h3>
                                    <iframe width="100%" height="315" src={this.state.image.video} frameBorder="0" title="walkthrough" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                    <p className="plain-link" onClick={() => this.setState({ ...this.state, videoShow: false })}>Switch to photo view</p></div>) : (<div><h3>Example photo</h3><img className="full-img" src={require(`../LessonView/${this.state.image.image}`)} alt="demo" /><p className="plain-link" onClick={() => this.setState({ ...this.state, videoShow: true })}>Switch to video view</p></div>)}
                            </div>
                        </Dialog>

                    </div>
                        <div className="instructions column-6 column-md-10 text-left">
                            <h4>Describe what you would improve about this design</h4>
                            <p>Now that you've given some positive feedback, it's time to share your critical comments. Remember: critique is intended to improve your peers' projects and it is a integral part of the design process. Focus on providing some feedback that will help move this project to the next level.</p>
                            <p>In the input fields below, name three things that are not working well in your chosen design sketch. To help get you going, I've created a few sentence starters for you. Feel free to use them or start from scratch.</p>
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
export default connect(mapReduxStoreToProps)(NegativeView);
