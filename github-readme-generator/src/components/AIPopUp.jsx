import React, { useState } from 'react';

const AIPopUp = ({ onGenerate, onClose }) => {
  const [keywords, setKeywords] = useState('');

  const handleGenerate = () => {
    onGenerate(keywords);
    onClose();
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }} onClick={onClose}></div>
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1001,
        color: 'black'
      }}>
        <h3 style={{ marginTop: 0 }}>Generate with AI</h3>
        <p>Enter some keywords to generate a description.</p>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="e.g., frontend, react, passionate"
          style={{ width: '100%', padding: '8px', marginBottom: '10px', color: 'black' }}
        />
        <button onClick={handleGenerate} style={{ marginRight: '10px' }}>Generate</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
};

export default AIPopUp;