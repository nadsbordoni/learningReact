import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    //o state tambem pode ser inicializado aqui 

  }

  state = {
    persons: [
      { id: 'p1', name: 'Nadia', age: 23 },
      { id: 'p2', name: 'Daniel', age: 22 },
      { id: 'p3', name: 'Meu amigo zé', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });
    //desse jeito muda o original
    //const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //deletar uma pessoa de uma array of person.
    //criar uma copia antes de manipular o objeto com slice, assim eu copio a array inteira na constante criada 
    //const persons = this.state.persons.slice(); <- jeito simples
    const persons = [...this.state.persons]; //array com os objetos da array antiga, mas é nova
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
    //just changing the pointer
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    console.log('[App.js] render');
    let persons = null;
    //if pode ser aqui porque nao é dentro no JSX. Jeito mais elegante. Codigo mais clean
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (

      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;