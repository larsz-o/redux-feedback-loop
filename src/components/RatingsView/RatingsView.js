import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Dialog} from '@material-ui/core';
import Header from '../Header/Header';

class RatingsView extends Component {
    constructor(){
        super();
    this.state = {
            clarity: 0,
            creativity: 0,
            usability: 0,
            overall: 0,
            image: {image: '', video: ''},
            open: false,
            showVideo: true
        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false, 
            image: {image: '', video: ''}
        })
    }
    handleRangeChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        }); 
    }

    navigateBack = () => {
        this.props.history.push('/questions');
    }
    sendValueToRedux = () => {
        let action = {type: 'USABILITY_RATING', payload: this.state.usability}; 
        this.props.dispatch(action); 
        action = {type: 'CREATIVITY_RATING', payload: this.state.creativity}; 
        this.props.dispatch(action);
        action = {type: 'CLARITY_RATING', payload: this.state.clarity}; 
        this.props.dispatch(action);
        action = {type: 'OVERALL_RATING', payload: this.state.overall}; 
        this.props.dispatch(action);
        this.props.history.push('/review');
    }
    render(){
        return(
            <div className="main">
                      <div className="main">
                <Header className={this.props.reduxStore.home}/>
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
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
                                    <p className="plain-link" onClick={() => this.setState({ ...this.state, videoShow: false })}>Switch to photo view</p></div>) : (<div><h3>Example photo</h3><img className="full-img" src={require(`../LessonView/${this.props.reduxStore.feedback.lesson.image}`)} alt="demo" /><p className="plain-link" onClick={() => this.setState({ ...this.state, videoShow: true })}>Switch to video view</p></div>)}
                            </div>
                        </Dialog>
                    </div>
                        <div className="instructions column-6 column-md-10 text-left">
                            <h4>Rate your design</h4>
                            <p>Finally, we are going to rank our peers' designs using quantitative values. Don't let the numbers intimidate you. These scales will help designers understand close they are to meeting the mark and which areas need the most improvement.</p>
                            <p>Please rank your design for each category listed below on a scale from 0 (worst)  - 10 (best).</p>
                            <div className="flex-col slider-div column-12">
                            <label>Clarity of design: {this.state.clarity}/10</label> <input value={this.state.clarity} onChange={(event)=>this.handleRangeChangeFor(event, 'clarity')} className="slider column-8" type="range" min="0" max="10" required/>
                            </div>
                            <div className="flex-col slider-div column-12">
                            <label>Creativity of design: {this.state.creativity}/10</label> <input value={this.state.creativity} onChange={(event)=>this.handleRangeChangeFor(event, 'creativity')} className="slider column-8" type="range" min="0" max="10" required/>
                            </div>
                            <div className="flex-col slider-div column-12">
                            <label>Usability of design: {this.state.usability}/10</label> <input value={this.state.usability} onChange={(event)=>this.handleRangeChangeFor(event, 'usability')} className="slider column-8" type="range" min="0" max="10" required/>
                            </div>
                            <div className="flex-col slider-div column-12">
                            <label>Overall impression of design: {this.state.overall}/10</label> <input value={this.state.overall} onChange={(event)=>this.handleRangeChangeFor(event, 'overall')} className="slider column-8" type="range" min="0" max="10" required/>
                            </div>
                            <div className="flex-box flex-center margin-top-15">
                            <Button variant="contained" color="secondary" onClick={()=>this.sendValueToRedux()}>Submit</Button>
                            </div>
                            
                           
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
export default connect(mapReduxStoreToProps)(RatingsView); 