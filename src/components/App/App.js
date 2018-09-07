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
        <br/>
      </div>
    );
  }
}

export default App;
