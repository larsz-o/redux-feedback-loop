import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {Button, Dialog } from '@material-ui/core'; 
import Header from '../Header/Header';
class MealView extends Component {
    constructor(){
        super(); 
    this.state = {
            examples: ['image1.png', 'image2.png'],
            open: false,
            image: ''
       
        }
    }
    handleClose = () => {
        this.setState({
            ...this.state,
            open: false, 
            image: ''
        })
    }
    navigateBack = () => {
        this.props.history.push('/');
    }
   next = () => {
        this.props.history.push('/describe'); 
    } 

    render(){
        
        return(
            <div className="main">
          <Header className={this.props.reduxStore.home}/>
          <div className="flex-box flex-evenly form-zone animate-pop-in">
                    <div className="column-4">
                        <h2>Design Sketches</h2>
                        <p>Read through the prompt for the Design Sketches assignment, then review the student work examples below. You will be able to look at the examples when I ask you questions about them in the next steps.</p>
                        <div className="flex-box flex-evenly">
                        {this.state.examples.map((ex, i) => {
                            return(
                                <div className="thumbnail" key={i}>
                                    <img src={require(`./${ex}`)} onClick={()=>this.setState({...this.state, open: true, image: ex})} alt={`example-work-${i+1}`}/>
                                </div>
                            )
                        })}
                        </div>
                     <Dialog open={this.state.open} onClose={this.handleClose}>
                        <div className="dialog">
                            <div className="flex-box flex-end close-icon" onClick={this.handleClose}>x</div>
                            {this.state.image.length > 0 && <img src={require(`./${this.state.image}`)}  className="full-img" alt="enlarged"/>}
                        </div>
                     </Dialog>

                    </div>
                    <div className="instructions column-6  text-left">
                        <h4>Assignment Prompt</h4>
                       <p>Every creative process leads to sketches because making something visual is the best way to get ideas down and to communicate to others. There is no need to worry about your artistic ability here; anyone can draw. There is no real right or wrong as long as you are using this as an active thinking exercise. Everyone needs to find an ideation process that works for them and the best way to learn yours is to practice. Another reason we sketch is because if an idea isn’t documented it doesn’t exist. So be sure to write down any and all ideas even if they aren’t complete or even if you aren’t sure what will work. This is not the time to judge or throw out ideas. 
</p>
                </div>
                </div>
                <div className="flex-box flex-evenly">
                <Button onClick={this.navigateBack}>Back</Button>
                   
                   <Button color="secondary" onClick={this.next}>Next</Button>
                </div>           
            </div>
       
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(MealView); 