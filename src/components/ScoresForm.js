import React, { Component } from 'react';

class ScoresForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      values: {}
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://lf0zzhflk9.execute-api.eu-central-1.amazonaws.com/dev/players')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(JSON.stringify(myJson));
        this.setState({players: myJson});
      });
  }
  change(event) {
    this.setState({
      currentUser: event.target.value
    })
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({values:  {
        ...this.state.values,
        [name]: event.target.value
      }
    });
   
  }
  submit(event) {
    event.preventDefault();
    let values = Object.keys(this.state.values).map((key) => {
      return {
        playerId: key,
        score: this.state.values[key]
      }
    });
    fetch('https://lf0zzhflk9.execute-api.eu-central-1.amazonaws.com/dev/scores', {
      method: 'POST',
      body: JSON.stringify({
        authorId: this.state.currentUser,
        values: values
      })
    });
    console.log(event);
  }
  render() {
    return (
        <div className="App">scores form
        <div className="selector">
          Who are you:
          <select onChange={this.change} defaultValue={this.state.user}>
            <option> -- select player -- </option>
            {this.state.players.map((player) => {
            return (
              <option value={player.id} key={player.id}>
                {player.name}
              </option>
            )
          })}
          </select>
        </div>
        {this.state.currentUser  ? <form onSubmit={this.submit}>
          {this.state.players.map((player) => {
            return (
              this.state.currentUser !== player.id ?
              <div  key={player.id}>
                <label>
                  {player.name}
                  <input name={player.id} value={this.state.values[player.id]} onChange={this.handleChange} type="text" ></input>
                </label>
              </div> : undefined
            )
            
          })}
          <button>Submit</button>
        </form> : undefined }
        </div>
    );
  }
}

export default ScoresForm;