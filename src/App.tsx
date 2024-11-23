import { useState } from 'react';
import './App.css';
import AppContent from './components/DevTools';
import BackgroundToggler from './components/BackgroundToggler';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('portfolio'); // Track active tab

  // Toggle the background color for dark mode
  const toggleBackgroundColor = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Set the body background color globally based on the theme
  document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
  document.body.style.color = isDarkMode ? '#fff' : '#000';
  document.body.style.transition = 'background-color 0.3s ease';

  return (
    <div className="App">
      {/* Global theme toggle */}
      <BackgroundToggler isDarkMode={isDarkMode} toggleBackgroundColor={toggleBackgroundColor} />

      {/* Header with Theme Toggle and Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex' }}>
          {/* Tabs for navigation */}
          <div
            onClick={() => setActiveTab('portfolio')}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              fontWeight: activeTab === 'portfolio' ? 'bold' : 'normal',
              borderBottom: activeTab === 'portfolio' ? '2px solid #000' : 'none',
            }}
          >
            Portfolio
          </div>
          <div
            onClick={() => setActiveTab('appContent')}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              fontWeight: activeTab === 'appContent' ? 'bold' : 'normal',
              borderBottom: activeTab === 'appContent' ? '2px solid #000' : 'none',
              marginLeft: '20px',
            }}
          >
            Dev Tools
          </div>
        </div>
      </div>

      {/* Conditional Rendering for active tab */}
      {activeTab === 'portfolio' ? <Portfolio isDarkMode={isDarkMode} /> : <AppContent isDarkMode={isDarkMode} />}
    </div>
  );
};

export default App;