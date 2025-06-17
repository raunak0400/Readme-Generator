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
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem' }}>Subtitle</h2>
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