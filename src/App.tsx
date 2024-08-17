import { Console } from 'console';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Header } from './components/Header';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      { <Greet name = 'Me' age={31} /> }

      { <Person name = {PersonName}/>}

      { <PersonList names={PersonListArray}/>}

      { <Status status = "IP"/>}

      {<Header>Placeholder text</Header>}
       <Oscar>
        <Header>Oscar goes to Leaonardo Di Caprio</Header>
      </Oscar>
      
      { <Button handleClick={()=> {
          console.log("Button clicked")
      } }/>}

    </div>
  )
}

export default App;
