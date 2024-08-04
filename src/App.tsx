import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  // this should match with props defined in the component
  const PersonName = {
    first: 'Isabelle',
    last: 'Jacobi',
  }

  const PersonListArray = [
    {
      first: 'Jackie',
      last: 'Stamm'
    },
    {
      first: 'Dominique',
      last: 'Wilkinson'
    },
    {
      first: 'Zion',
      last: 'Nikolaus'
    }
  ]


  return (
    <div className='App'>
      <Greet name = 'Me' age={31} />
      <Person name = {PersonName}/>
      <PersonList names={PersonListArray}/>
    </div>
  )
}

export default App;
