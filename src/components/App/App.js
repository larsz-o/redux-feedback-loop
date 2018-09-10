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
import { Typography, Grid, Button } from '@material-ui/core';


class App extends Component {

  render() {
    return (
      <Router >
      <div className="App">
        <header className="App-header">
        <Typography variant="display3" class="header-text" gutterBottom>Dinner Diary</Typography>
          <Grid container spacing={40}>
          <Grid item sm={8}>
            <Button href="/" color="primary" variant="contained" onClick={this.goHome}>Home</Button><span>  </span>
            <Button href="/#/results" color="primary" variant="contained" onClick={this.goToResults}>Ratings Log</Button>
            </Grid>
          </Grid>
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
