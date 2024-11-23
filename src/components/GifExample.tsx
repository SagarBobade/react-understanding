import React from 'react';

const GifExample: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://media.giphy.com/media/3oEjI6S4l8k0LrPoFq/giphy.gif"
        alt="Sample GIF"
        style={{ width: '300px', height: 'auto' }}
      />
    </div>
  );
};

export default GifExample;