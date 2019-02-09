import React, { Component } from 'react';

class CreateTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {players: []};
  }
  render() {
    return (
        <div className="main">
            Create teams!
        </div>
    );
  }
}

export default CreateTeams;