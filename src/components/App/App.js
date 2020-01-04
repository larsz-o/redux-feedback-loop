import React, { Component } from 'react';
import './App.css';
import HomeView from '../HomeView/HomeView.js';
import LessonView from '../LessonView/LessonView.js'; 
import DescribeView from '../TasteView/TasteView.js';
import TextureView from '../TextureView/TextureView.js';
import CreativityView from '../CreativityView/CreativityView.js'; 
import NutritionView from '../NutritionView/NutritionView.js';
import CommentsView from '../CommentsView/CommentsView.js'; 
import SubmissionCompleteView from '../SubmissionCompleteView/SubmissionCompleteView';
import ResultsView from '../ResultsView/ResultsView.js'; 
import {HashRouter as Router, Route} from "react-router-dom";



class App extends Component {

  render() {
    return (
      <Router >
      <div className="App">
          {/* client-side routers */}
          <Route exact path="/" component={HomeView}/>
          <Route path="/lesson" component={LessonView}/>
          <Route path="/describe" component={DescribeView}/>
          <Route path="/texture" component={TextureView}/>
          <Route path="/creativity" component={CreativityView}/>
          <Route path="/nutrition" component={NutritionView}/>
          <Route path="/comments" component={CommentsView}/>
          <Route path="/submission" component={SubmissionCompleteView}/>
          <Route path="/results" component={ResultsView}/>
      </div>
       </Router>
    );
  }
}
export default App;
