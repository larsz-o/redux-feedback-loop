import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, Input} from '@material-ui/core';
import Header from '../Header/Header';

class TasteView extends Component {
    constructor() {
        super();
        this.state = {
            examples: ['image1.png', 'image2.png'],
            open: false,
            image: '',
            selected: '', 
            positive: [],
            input1: '1. What really impressed me was',
            input2: '2. This sketch shows',
            input3: '3. The strongest aspect of this design is'
            
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
        const action = { type: 'SUBMIT_POSITIVE', payload: [this.state.input1, this.state.input2, this.state.input3] };
        this.props.dispatch(action);
        if(this.props.reduxStore.feedback.positive.length !== 3){
            this.props.history.push('/');
        } else {
            alert('Please submit three positive comments.');
        }
       
    }

    render() {
        return (
            <div className="main">
                <Header />
                <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <h2>First impressions</h2>
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
                            <h4>Describe what you like about this design</h4>
                            <p>It is easy to jump right into critical comments when critiquing your peers' work, but it helps the designer who is being critiqued and you - the critiquer - to start with some positive feedback.</p>
                            <p>In the input fields below, name three things that are working well in your chosen design sketch. To help get you going, I've created a few sentence starters for you. Feel free to use them or start from scratch.</p>
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
export default connect(mapReduxStoreToProps)(TasteView); 