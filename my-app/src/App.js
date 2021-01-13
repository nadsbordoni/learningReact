import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = { //so funciona desse jeito em componente extendido
    persons: [
      { id: 'p1', name: 'Nadia', age: 23 },
      { id: 'p2', name: 'Daniel', age: 22 },
      { id: 'p3', name: 'Meu amigo zé', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;

    });
    //desse jeito muda o original
    //const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
//deletar uma pessoa de uma array of person.
//desse jeito, eu to criando um pointer e mudando o obj original. Estou mudando o dado original.
//criar uma copia antes de manipular o objeto com slice, assim eu copio a array inteira na constante criada 
    //const persons = this.state.persons.slice(); <- jeito simples
    const persons = [...this.state.persons]; //array com os objetos da array antiga, mas é nova
    persons.splice(personIndex,1)
    this.setState({persons: persons})
    //just changing the pointer
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    //if pode ser aqui porque nao é dentro no JSX. Jeito mais elegante. Codigo mais clean
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) =>this.nameChangeHandler(event, person.id)}/>
          })}
        </div>

      );
      style.backgroundColor = 'red';
      style [':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red'); //vermelho
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //vermelho e negrito
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {classes.join(' ')}>This is really working!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App); //higher order component