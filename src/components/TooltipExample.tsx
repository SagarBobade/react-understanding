import React, { useState } from 'react';

const TooltipExample: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show the tooltip on mouse enter and hide it on mouse leave
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Hover me
      </button>
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#555',
            color: '#fff',
            textAlign: 'center',
            padding: '5px 10px',
            borderRadius: '4px',
            width: '150px',
            fontSize: '14px',
            opacity: 0.9,
            zIndex: 1,
          }}
        >
          This is a tooltip!
        </div>
      )}
    </div>
  );
};

export default TooltipExample;