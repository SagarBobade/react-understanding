import React, { useState } from 'react';

const ModalExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Modal Content</h4>
            <p>This is a modal example.</p>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;