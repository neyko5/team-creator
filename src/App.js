import React, { Component } from 'react';
import ScoresForm from './components/ScoresForm';
import CreateTeams from './components/CreateTeams.js';
import Main from './components/Main';
import { Route, Router } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <h1>Team creator</h1>
            
            <Route exact path="/" component={Main}></Route>
            <Route path="/enterscores" component={ScoresForm}></Route>
            <Route path="/createteams" component={CreateTeams}></Route>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
