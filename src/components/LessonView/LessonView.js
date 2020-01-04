import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog } from '@material-ui/core';
import Header from '../Header/Header';
class LessonView extends Component {
    constructor() {
        super();
        this.state = {
            examples: [{image: 'image1.png', video: 'https://www.youtube.com/embed/HIj8SOE-jGo'}, {image:'image2.png', video: 'https://www.youtube.com/embed/8pD34rKoSEc'}],
            open: false,
            image: {image: 'image1.png', video: 'https://www.youtube.com/embed/HIj8SOE-jGo'},
            viewDesigns: false,
            videoShow: false
        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false,
            image: {image: 'image1.png', video: 'https://www.youtube.com/embed/HIj8SOE-jGo'}
        })
    }
    navigateBack = () => {
        this.props.history.push('/');
    }
    next = () => {
        this.props.history.push('/positive');
    }

    render() {

        return (
            <div className="main">
                <Header className={this.props.reduxStore.home} />
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-6">
                        <h2>Design Sketches Assignment Prompt</h2>
                        <p>Read through the prompt for the Design Sketches assignment. 
                            When you are done reviewing the prompt, click to view the design examples (the work product for this prompt).</p>
                        <div className="instructions text-left">
                            <h4>Prompt</h4>
                            <p>Every creative process leads to sketches because making something visual is the best way to get ideas down and to communicate to others. There is no need to worry about your artistic ability here; anyone can draw. There is no real right or wrong as long as you are using this as an active thinking exercise. Everyone needs to find an ideation process that works for them and the best way to learn yours is to practice.</p>
                            <h5>Requirements</h5>
                            <p>Create one sketch of a single view for your mobile application. The design sketch should be low-fidelity and display the most basic components of your app's functionality. Do not use color at this stage. Submit a one page sketch to Moodle by Saturday.</p>
                            <div className="flex-box flex-center">
                                <Button color="secondary" variant="contained" onClick={() => this.setState({ ...this.state, viewDesigns: true })}>View designs</Button>
                            </div>
                        </div>
                    </div>
               
                {this.state.viewDesigns && <div className="flex-box flex-evenly column-4">
                <div><h2>Design Sketches</h2>
                <p>Click each thumbnail to view the design sketch in detail. When you are done reviewing, navigate to the next page.</p></div>
                    {this.state.examples.map((ex, i) => {
                        return (
                            <div className="thumbnail" key={i}>
                                <img src={require(`./${ex.image}`)} onClick={() => this.setState({ ...this.state, open: true, image: ex })} alt={`example-work-${i + 1}`} />
                            </div>
                        )
                    })}
                </div>}
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <div className="dialog">
                        <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                        {this.state.videoShow ? (<div><h3>Walk-Through Demo</h3>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/HIj8SOE-jGo" frameBorder="0" title="walkthrough" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <p className="plain-link" onClick={()=>this.setState({...this.state, videoShow: false})}>Switch to photo view</p></div>):(<div><h3>Example photo</h3><img className="full-img" src={require(`./${this.state.image.image}`)} alt="demo"/><p className="plain-link" onClick={()=>this.setState({...this.state, videoShow: true})}>Switch to video view</p></div>)}
                    </div>
                     </Dialog>

                     </div>


                {this.state.viewDesigns && <div className="flex-box flex-evenly">
                    <Button onClick={this.navigateBack}>Back</Button>

                    <Button color="secondary" onClick={this.next}>Next</Button>
                </div>}
            </div>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(LessonView); 