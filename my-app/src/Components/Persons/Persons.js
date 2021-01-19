import React from 'react';
import Person from './Person/Person';

//props vai conter uma array de Persons
//como nao é uma classe, retira-se o this. Lembrar que é funcional component
const persons = (props) => {
  console.log('[Persons.js] rendering...')
  return props.persons.map((person, index) => {
        return (<Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)} />
        );
        } );
    };

    export default persons;