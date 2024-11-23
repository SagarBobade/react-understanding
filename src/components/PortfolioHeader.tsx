import React from 'react';

interface PortfolioHeaderProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>; // Function to change the active tab
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({ setActiveTab }) => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>My Portfolio</div>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <button onClick={() => setActiveTab('home')} style={linkStyle}>
              Home
            </button>
          </li>
          <li style={navItemStyle}>
            <button onClick={() => setActiveTab('about')} style={linkStyle}>
              About
            </button>
          </li>
          <li style={navItemStyle}>
            <button onClick={() => setActiveTab('contact')} style={linkStyle}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navListStyle: React.CSSProperties = {
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle: React.CSSProperties = {
  margin: '0 15px',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'normal',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

export default PortfolioHeader;