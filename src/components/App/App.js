import React, { Component } from 'react';
import './App.css';
import HomeView from '../HomeView/HomeView.js';
import LessonView from '../LessonView/LessonView.js'; 
import PositiveView from '../FirstReview/FirstReview.js';
import CriticalView from '../CriticalView/CriticalView.js';
import QuestionsView from '../QuestionsView/QuestionsView'; 
import RatingsView from '../RatingsView/RatingsView';
import SubmissionCompleteView from '../SubmissionCompleteView/SubmissionCompleteView';
import ResultsView from '../ResultsView/ResultsView.js'; 
import {HashRouter as Router, Route} from "react-router-dom";



class App extends Component {
// to do: update server and database!
  render() {
    return (
      <Router >
      <div className="App">
          {/* client-side routers */}
          <Route exact path="/" component={HomeView}/>
          <Route path="/lesson" component={LessonView}/>
          <Route path="/positive" component={PositiveView}/>
          <Route path="/critical" component={CriticalView}/>
          <Route path="/questions" component={QuestionsView}/>
          <Route path="/ratings" component={RatingsView}/>
          <Route path="/review" component={SubmissionCompleteView}/>
          <Route path="/results" component={ResultsView}/>
      </div>
       </Router>
    );
  }
}
export default App;
