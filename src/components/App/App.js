import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import all of the views here too. 
import {HashRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinner Diary</h1>
          <h4><i>365 Days of Yum</i></h4>
        </header>
        <Router>
          {/* client-side routers */}
          <Route exact path="/" component={HomeView}/>
          <Route path="/taste" component={TasteView}/>
          <Route path="/texture" component={TextureView}/>
          <Route path="/creativity" component={CreativityView}/>
          <Route path="/nutrition" component={NutritionView}/>
          <Route path="/comments" component={CommentsView}/>
          <Route path="/submission" component={SubmissionView}/>
          <Route path="/results" component={ResultsView}/>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
