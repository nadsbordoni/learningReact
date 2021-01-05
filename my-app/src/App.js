import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = { //so funciona desse jeito em componente extendido
    persons: [
      { name: 'Nadia', age: 23 },
      { name: 'Daniel', age: 22 },
      { name: 'Meu amigo zé', age: 24 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Daniel Bastos', age: 22 },
        { name: 'meu amigo zé', age: 24 }
      ]
    });
  };
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nadia', age: 23 },
        { name: event.target.value, age: 22 },
        { name: 'meu amigo zé', age: 24 }
      ]
    });
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button 
        style = {style}
        onClick={() => this.switchNameHandler('Nads')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dan!')}//passando como referencia para click propertie
          changed={this.nameChangeHandler}
        >
          My Hobbies: mandar nadia estudar
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;