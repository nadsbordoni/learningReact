import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    names: [
      {username: 'Nadia'},
      {username: 'Daniel'}
    ]
  }
//aqui é onde eu criei a funçao que muda o nome, e so coloquei no primeiro username
  changeUsernameHandler = (event) => {
    this.setState({ //to manipulate de state
      names: [
        {username: event.target.value},
        {username: 'Daniel'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> This is a test! </h1>
        < UserInput changed={this.changeUsernameHandler} value = {this.state.names[0].username}/>
        < UserOutput  username = {this.state.names[0].username}/>
        < UserOutput  username = {this.state.names[1].username}/>
       
      </div>
    );
  }
}

export default App;
