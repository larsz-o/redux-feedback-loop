import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from '../Header/Header';

class TasteView extends Component {
    constructor() {
        super();
        this.state = {
            examples: [{ image: 'image1.png', video: 'https://www.youtube.com/embed/HIj8SOE-jGo' }, { image: 'image2.png', video: 'https://www.youtube.com/embed/8pD34rKoSEc' }],
            open: false,
            image: {image: '', video: ''},
            selected: {image: '', video: ''},
            input1: '1. What really impressed me was',
            input2: '2. This sketch shows',
            input3: '3. The strongest aspect of this design is',
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
        this.props.history.push('/critical');
    }
    navigateBack = () => {
        this.props.history.push('/lesson');
    }
    selectProject = (example) => {
        this.props.dispatch({ type: 'CHOOSE_LESSON', payload: example });
        this.setState({
            ...this.state,
            selected: example
        })
    }
    sendValueToRedux = () => {
        const action = { type: 'SUBMIT_POSITIVE', payload: [this.state.input1, this.state.input2, this.state.input3] };
        this.props.dispatch(action);
        this.navTo();

    }

    render() {
        return (
            <div className="main">
                <Header className={this.props.reduxStore.home} />
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <h2>First impressions</h2>
                        <p>Click on the thumbnail for each project to watch a student walk through their design. You will be doing a similar walk-through in your assignment later this week.</p>
                        <p>Then, select one of the two projects to provide feedback on for the duration of this activity.</p>
                        <div className="flex-box flex-evenly">
                            {this.state.examples.map((ex, i) => {
                                return (
                                    <div className="thumbnail" key={i}>
                                        {this.state.selected === ex ? (<div className="flex-col selected-image"><img src={require(`../LessonView/${ex.image}`)} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`example-work-${i + 1}`} /><Button onClick={() => this.selectProject('')}>undo</Button></div>) : (<div className="flex-col"><img src={require(`../LessonView/${ex.image}`)} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`example-work-${i + 1}`} />
                                            <Button color="secondary" onClick={() => this.selectProject(ex)}>select</Button></div>)}
                                    </div>
                                )
                            })}
                        </div>
                        <Dialog open={this.state.open} onClose={this.handleClose}>
                            <div className="dialog">
                                <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                                {this.state.videoShow ? (<div><h3>Walk-Through Demo</h3>
                                    <iframe width="560" height="315" src={this.state.image.video} frameBorder="0" title="walkthrough" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                    <p className="plain-link" onClick={() => this.setState({ ...this.state, videoShow: false })}>Switch to photo view</p></div>) : (<div><h3>Example photo</h3><img className="full-img" src={require(`../LessonView/${this.state.image.image}`)} alt="demo" /><p className="plain-link" onClick={() => this.setState({ ...this.state, videoShow: true })}>Switch to video view</p></div>)}
                            </div>
                        </Dialog>

                    </div>
                    {this.state.selected.image.length !== 0 && <div className="instructions column-6  text-left">
                        <h4>Describe what you like about this design</h4>
                        <p>It is easy to jump right into critical comments when critiquing your peers' work, but it helps the designer who is being critiqued and you - the critiquer - to start with some positive feedback.</p>
                        <p>In the input fields below, name three things that are working well in your chosen design sketch. To help get you going, I've created a few sentence starters for you. Feel free to use them or start from scratch.</p>
                        <div className="flex-col column-12">
                            <input value={this.state.input1} onChange={(event) => this.handleChangeFor(event, 'input1')} required />
                            <input value={this.state.input2} onChange={(event) => this.handleChangeFor(event, 'input2')} required />
                            <input value={this.state.input3} onChange={(event) => this.handleChangeFor(event, 'input3')} required />
                        </div>
                        <div className="flex-box flex-center margin-top-15">
                            <Button variant="contained" color="secondary" onClick={() => this.sendValueToRedux()}>Submit</Button>
                        </div>


                    </div>}
                </div>


            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(TasteView); 