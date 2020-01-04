import React, {Component} from 'react'; 
import axios from 'axios'; 
import {connect} from 'react-redux'; 
import { Button } from '@material-ui/core';
import Header from '../Header/Header';

class SubmissionView extends Component {
    
    postFeedbackToServer = () => {
        // const newFeedback = this.props.reduxStore.feedback; 
        // console.log(newFeedback); 
        // axios({
        //     method: 'POST',
        //     url: '/feedback',
        //     data: newFeedback
        // }).then((response) => {
        //    console.log(response); 
        //    const action = {type: 'CLEAR_RATING'};
        //    this.props.dispatch(action); 
        // }).catch((error) => {
        //     console.log('Error posting feedback', error);
        //     alert('Your dinner rating did not post. Please try again.'); 
        // })   
    }
    returnHome = () => {
        this.props.history.push('/'); 
    }
    render(){
        let rating = this.props.reduxStore.feedback;
        let total = parseInt(rating.clarity) + parseInt(rating.usability) + parseInt(rating.creativity) + parseInt(rating.overall);
        let percent = (total/40).toFixed(2)
        return(
         <div className="main">
             {/* // to do: add feedback */}
             <Header className={this.props.reduxStore.home}/>
             <div className="flex-col flex-center center form-zone animate-pop-in">
                 <h2>Thanks for participating in the peer critique practice session, {rating.name}!</h2>
                 <p>Here are your responses.</p>
                 </div>
                 <div className="flex-box flex-center column-12">
                 <div className="results column-4">
                     <div className="flex-box flex-between">
                     <h4>Positive Feedback</h4>  <img src={require('../App/smiling.svg')} alt="smile" height="25px"/>
                     </div>
              
                 {rating.positive.map((item, i) => {
                     return (
                         <p key={i}>{item}</p>
                     )
                 })}
                 </div>
                 <div className="results column-4">
                 <div className="flex-box flex-between">
                 <h4>Critical Feedback</h4> <img src={require('../App/customer-support.svg')} alt="fixit" height="25px"/>
                     </div>
                
                 {rating.negative.map((item, i) => {
                     return (
                         <p key={i}>{item}</p>
                     )
                 })}
                 </div>
                 <div className="results column-4"><div className="flex-box flex-between">
                 <h4>Questions</h4><img src={require('../App/question.svg')} alt="questions" height="25px"/>
                     </div>
                
                 {rating.questions.map((item, i) => {
                     return (
                         <p key={i}>{item}</p>
                     )
                 })}
                 </div>
                 <div className="results column-4">
                 <div className="flex-box flex-between">
                 <h4>Ratings </h4>  <img src={require('../App/favorites.svg')} alt="ratings" className="card-icon"/>
                     </div>
                 <p>Clarity: {rating.clarity}</p>
                 <p>Creativity: {rating.creativity}</p>
                 <p>Usability: {rating.usability}</p>
                 <p>Overall: {rating.overall}</p>
                <p>Total score: {percent}</p>
                 </div>
                
             </div>
             <div className="flex-box flex-center form-zone">
                 <Button variant="contained" color="secondary">Submit review</Button>
             </div>
         </div>
           
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore,
});
export default connect(mapReduxStoreToProps)(SubmissionView); 