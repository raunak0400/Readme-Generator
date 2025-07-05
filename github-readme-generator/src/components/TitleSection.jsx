import React, { useState } from 'react';

const TitleSection = ({ formData, setFormData }) => {
  const [titleFocused, setTitleFocused] = useState(false);
  const [descFocused, setDescFocused] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem' }}>Title</h2>
      <input
        type="text"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        onFocus={() => setTitleFocused(true)}
        onBlur={() => setTitleFocused(false)}
        placeholder={!formData.name && !titleFocused ? "Hi 🙋‍♂️, I'm" : ''}
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem' }}>Subtitle
      <span style={{ marginLeft: '8px', cursor: 'pointer', position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
              <div style={{
                display: 'none',
                position: 'absolute',
                left: '140%',
                top: '55%',
                transform: 'translateY(-50%)',
                background: '#222',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                whiteSpace: 'pre-line',
                zIndex: 100,
                minWidth: '450px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              className="font-tooltip"
              >
                <div className="font-tooltip-arrow" style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0,
                  height: 0,
                  borderTop: '7px solid transparent',
                  borderBottom: '7px solid transparent',
                  borderRight: '8px solid #222'
                }} />
                <div>
                  <strong>Tip:</strong> For a outstanding <span style={{ color: '#60a5fa' }}>Subtitle</span> use reference from internet and modify it for yourself!
                </div>
              </div>
            </span>
      </h2>
      <input
        type="text"
        name="description"
        value={formData.description || ''}
        onChange={handleChange}
        onFocus={() => setDescFocused(true)}
        onBlur={() => setDescFocused(false)}
        placeholder={!formData.description && !descFocused ? "A passionate frontend developer from India" : ''}
        id='description'
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 mb-3"
      />
    </div>
  );
};

export default TitleSection;