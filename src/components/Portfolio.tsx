// src/components/Portfolio.tsx
import React, { useState } from 'react';
import PortfolioHeader from './PortfolioHeader';
import HomeDetails from './HomeDetails';
import AboutDetails from './AboutDetails';
import ContactDetails from './ContactDetails';

interface PortfolioProps {
  isDarkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
    const [activeTab, setActiveTab] = useState<string>('home'); // Default to 'home' tab

  return (
    <div>
              <PortfolioHeader setActiveTab={setActiveTab} /> {/* Pass setActiveTab to the header */}
      <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      {/* Portfolio content */}

      <main style={{ padding: '20px' }}>
        {/* Conditional Rendering based on activeTab */}
        {activeTab === 'home' && <HomeDetails />}
        {activeTab === 'about' && <AboutDetails />}
        {activeTab === 'contact' && <ContactDetails />}
      </main>
    </div>
    
  );
};

export default Portfolio;