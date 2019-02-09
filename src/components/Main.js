import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {players: []};
  }
  render() {
    return (
        <div className="main">
            <Link to="/enterscores">Enter scores</Link><br/>
            <Link to="/createteams">Create teams</Link>
        </div>
    );
  }
}

export default Main;