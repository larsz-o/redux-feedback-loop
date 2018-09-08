import React, { Component } from 'react';
import './App.css';
import HomeView from '../HomeView/HomeView.js';
import MealView from '../MealView/MealView.js'; 
import TasteView from '../TasteView/TasteView.js';
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
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinner Diary</h1>
          <h4><i>365 Days of Yum</i></h4>
          <nav>
            <a href="/">Home</a>
            <a href="/#/results">Ratings Log</a>
          </nav>
        </header>
        <br/>
          {/* client-side routers */}
          <Route exact path="/" component={HomeView}/>
          <Route path="/food" component={MealView}/>
          <Route path="/taste" component={TasteView}/>
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
