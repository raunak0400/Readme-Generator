import React from 'react';

const TitleSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Title</h2>
      <input
        type="text"
        name="projectName"
        value={formData.projectName || ''}
        onChange={handleChange}
        placeholder="Project Name"
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <input
        type="text"
        name="tagline"
        value={formData.tagline || ''}
        onChange={handleChange}
        placeholder="Tagline"
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Subtitle</h2>
      <textarea
        name="description"
        value={formData.description || ''}
        onChange={handleChange}
        placeholder="Project Description"
        id='description'
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 min-h-[120px] resize-none"
      />
    </div>
  );
};

export default TitleSection;