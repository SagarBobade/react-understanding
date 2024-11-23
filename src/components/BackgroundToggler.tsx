// src/components/BackgroundToggler.tsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface BackgroundTogglerProps {
  isDarkMode: boolean;
  toggleBackgroundColor: () => void;
}

const BackgroundToggler: React.FC<BackgroundTogglerProps> = ({ isDarkMode, toggleBackgroundColor }) => {
  return (
    <button
      onClick={toggleBackgroundColor}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px',
        fontSize: '24px',
        cursor: 'pointer',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: isDarkMode ? '#fff' : '#333',
        color: isDarkMode ? '#000' : '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        height: '50px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default BackgroundToggler;