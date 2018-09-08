import React, {Component} from 'react'; 

class SubmissionView extends Component {
    returnHome = () => {
        this.props.history.push('/'); 
    }
    render(){
        return(
            <div>
            <p>Thanks for rating your dinner! A complete log of all ratings can be found on the <a href='#/results'>Results</a> page</p>
            <button onClick={this.returnHome}>Return Home</button>
            </div>
        );
    }
}
export default SubmissionView; 