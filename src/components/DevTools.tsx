import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Container } from './Container';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/user';
import ModalExample from './ModalExample'; // Assuming you save the modal in a separate file
import TooltipExample from './TooltipExample'; // Assuming you save the tooltip in a separate file
import PaginationExample from './PaginationExample';
import GifExample from './GifExample';

interface PersonProps {
  first: string;
  last: string;
}

interface AppContentProps {
  isDarkMode: boolean;
}

const AppContent: React.FC<AppContentProps> = ({ isDarkMode }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
  document.body.style.color = isDarkMode ? '#fff' : '#000';
  document.body.style.transition = 'background-color 0.3s ease';

  const PersonListArray = [
    { first: 'Jackie', last: 'Stamm' },
    { first: 'Dominique', last: 'Wilkinson' },
    { first: 'Zion', last: 'Nikolaus' },
  ];

  const [peopleList, setPeopleList] = useState<PersonProps[]>(PersonListArray);

  const deletePerson = (index: number) => {
    const updatedList = peopleList.filter((_, i) => i !== index);
    setPeopleList(updatedList);
  };

  return (
    <div style={{ padding: '20px', transition: 'background-color 0.3s ease' }}>
      <div
        className="App"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '30px',
          padding: '20px',
          position: 'relative',
          backgroundColor: isDarkMode ? '#444' : '#f4f4f4',
          borderRadius: '8px',
        }}
      >
        {/* Toggle Background Color Section */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Toggle Background Color</h4>
          <p>Dark Mode is {isDarkMode ? 'Enabled' : 'Disabled'}</p>
        </div>

        {/* Basic Text and Links */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Basic Text and Links</h4>
          <p>This is a basic paragraph example.</p>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            This is a link
          </a>
        </div>

        {/* Input Component */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Input Component</h4>
          <Input value={inputValue} handleChange={handleInputChange} />
        </div>

        {/* Textarea */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Textarea</h4>
          <textarea
            placeholder="Enter your text here..."
            style={{ width: '100%', padding: '10px' }}
          ></textarea>
        </div>

        {/* Button Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Button Example</h4>
          <Button handleClick={() => { console.log('Button clicked'); }} />
        </div>

        {/* Form Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Form Example</h4>
          <form>
            <label>
              Name:
              <input type="text" name="name" placeholder="Enter name" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Checkbox Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Checkbox Example</h4>
          <label>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            Accept Terms and Conditions
          </label>
        </div>

        {/* Select (Dropdown) */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Select (Dropdown)</h4>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* List with Delete Functionality */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>List with Delete Functionality</h4>
          <ul>
            {peopleList.map((person, index) => (
              <li key={index}>
                {person.first} {person.last}
                <button onClick={() => deletePerson(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Image Example</h4>
          <img src="https://lumiere-a.akamaihd.net/v1/images/male-avatar-emoji-128_b4bf88a6.png" alt="Placeholder" />
        </div>

        <div>
        <h4 style={getHeaderStyle(isDarkMode)}>GIF Example</h4>
      <GifExample />
      {/* Other components */}
    </div>
    
        {/* Table Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Table Example</h4>
          <table style={{ width: '100%', border: '1px solid black', padding: '10px' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>25</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Container Component */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Container Component</h4>
          <Container styles={{ border: '1px solid black', padding: '1rem' }} />
        </div>

        {/* useState Hook (Single/Null Value) */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>useState Hook (Single/Null Value)</h4>
          <LoggedIn />
        </div>

        {/* useState Hook with Different Initial Value */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>useState Hook with Different Initial Value</h4>
          <User />
        </div>

        {/* Modal Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Modal Example</h4>
          <ModalExample />
        </div>

        {/* Tooltip Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Tooltip Example</h4>
          <TooltipExample />
        </div>

        {/* Pagination Example */}
        <div>
          <h4 style={getHeaderStyle(isDarkMode)}>Pagination Example</h4>
          <PaginationExample />
        </div>
      </div>
    </div>
  );
};

const getHeaderStyle = (isDarkMode: boolean): React.CSSProperties => ({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textDecoration: 'underline',
  color: 'blue',
});

export default AppContent;