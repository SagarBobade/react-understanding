import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/user';

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
    <div className='App' style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "60px", 
        paddingLeft: "50px", 
        paddingRight: "50px"
        }}>
      <div>
      <h4>Example of pass a variable as a prop</h4>
      { <Greet name = 'Me' age={31} /> }
<p>====================================================== </p>
</div>
<div>
    <h4>Example of pass a object as a prop</h4>
      { <Person first={PersonName.first} last={PersonName.last}/>}
<p>====================================================== </p>
</div>
<div>
      <h4>Example of pass an Array as a prop</h4>
      { <PersonList names={PersonListArray}/>}
<p>====================================================== </p>
</div>
<div>
      <h4>Example of conditioning as per prop</h4>
      { <Status status = "IP"/>}
<p>====================================================== </p>
</div>
<div>
      <h4>Example of nested component</h4>
      {<Header>Placeholder text</Header>}
       <Oscar>
        <Header>Oscar goes to Leaonardo Di Caprio</Header>
      </Oscar>
<p>====================================================== </p>
</div>
<div>
      <h4>Example of Click event</h4>      
      { <Button handleClick={()=> {
          console.log("Button clicked")
      } }/>}
<p>====================================================== </p>
</div>
<div>
      <Input value='' handleChange={(event) => console.log(event)}/>
<p>====================================================== </p>
</div>
<div>
      <Container styles={{border:'1px solid black', padding:'1rem'}} />

<p>====================================================== </p>
</div>
<div>
      <h4>Example of useState hook with single/null value</h4>      
    { <LoggedIn/>}
<p>====================================================== </p>
</div>
<div>
  <h4>Example of useState hook when initial value is different than initial value</h4>      
      {<User/>}
<p>====================================================== </p>

    </div>
    </div>
  )
    }
export default App;
