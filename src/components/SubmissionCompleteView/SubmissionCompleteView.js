import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import { connect } from 'react-redux';
import Header from '../Header/Header';

class SubmissionView extends Component {

    returnHome = () => {
        this.props.history.push('/');
    }
    reset = () => {
        if(window.confirm('Are you sure you want to start over? Your data will be erased. (You can download your response first.)')){
            this.props.dispatch({type: 'CLEAR_RATING'});
            this.props.dispatch({type: 'NAV_TO_FEEDBACK'});
            this.props.history.push('/');
        }
    }
    render() {
        let rating = this.props.reduxStore.feedback;
        let total = parseInt(rating.clarity) + parseInt(rating.usability) + parseInt(rating.creativity) + parseInt(rating.overall);
        let percent = ((total / 40) * 100).toFixed(2);
        let data = [['positive', 'critical', 'questions', 'clarity', 'creativity', 'usability', 'overall', 'percent'], [rating.positive, rating.negative, rating.questions, rating.clarity, rating.creativity, rating.usability, rating.overall, (percent + '%')]];
        return (
            <div className="main">
                {/* // to do: add feedback -- if score given is under 50%, give pointers for seeing positive, vice versa */}
                <Header className={this.props.reduxStore.home} />
                <div className="flex-box flex-end">
                <div className="flex-box flex-evenly column-3 form-zone">
                    <CSVLink filename={"peer-review-response.csv"}
                        className="button"
                        target="_blank" data={data}>download responses</CSVLink>
                  <div className="button" onClick={this.reset}>try again</div>
             </div>
                </div>
               
                <div className="flex-col flex-center center animate-pop-in">
                </div>
                <div className="flex-box flex-center column-12">
                    <div className="results column-4">
                        <div className="flex-box flex-between">
                            <h4>Positive Feedback</h4>  <img src={require('../App/smiling.svg')} alt="smile" height="25px" />
                        </div>

                        {rating.positive.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                    </div>
                    <div className="results column-4">
                        <div className="flex-box flex-between">
                            <h4>Critical Feedback</h4> <img src={require('../App/customer-support.svg')} alt="fixit" height="25px" />
                        </div>

                        {rating.negative.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                    </div>
                    <div className="results column-4"><div className="flex-box flex-between">
                        <h4>Questions</h4><img src={require('../App/question.svg')} alt="questions" height="25px" />
                    </div>

                        {rating.questions.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })}
                    </div>
                    <div className="results column-4">
                        <div className="flex-box flex-between">
                            <h4>Ratings </h4>  <img src={require('../App/favorites.svg')} alt="ratings" className="card-icon" />
                        </div>
                        <p>Clarity: {rating.clarity}</p>
                        <p>Creativity: {rating.creativity}</p>
                        <p>Usability: {rating.usability}</p>
                        <p>Overall: {rating.overall}</p>
                        <p>Total score: {percent}%</p>
                    </div>

                </div>
            </div>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore,
});
export default connect(mapReduxStoreToProps)(SubmissionView); 