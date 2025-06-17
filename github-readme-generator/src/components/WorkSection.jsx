import React from 'react';

const WorkSection = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const updatedWork = [...formData.work];
    updatedWork[index] = {
      ...updatedWork[index],
      [e.target.name]: e.target.value,
    };
    setFormData({ ...formData, work: updatedWork });
  };

  const workFields = [
    { label: "🔭 I'm currently working on", name: "current", projectNamePlaceholder: "Project Name" },
    { label: "👯 I'm looking to collaborate", name: "collaborate", projectNamePlaceholder: "Project Name" },
    { label: "🤝 I'm looking for help with", name: "help", projectNamePlaceholder: "Project Name" },
    { label: "🌱 I'm currently learning", name: "learning", projectNamePlaceholder: "Frameworks" },
    { label: "💬 Ask me about", name: "ask", projectNamePlaceholder: "React, Vue etc." },
    { label: "📫 How to reach me", name: "contact", projectNamePlaceholder: "Email or social" },
    { label: "⚡ Fun fact", name: "funfact", projectNamePlaceholder: "Share a fun fact" },
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem' }}>Work</h2>
      <div className="space-y-4">
        {workFields.map((field, index) => (
          <div key={field.name} className="flex items-center gap-4" id='work-section-field'>
            <div className="w-1/3" id='work-section-field-label'>
              <label className="block text-left font-medium text-gray-600">{field.label}</label>
            </div>
            <div className="w-1/3" id='work-section-field-input'>
              {index < 3 ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="projectName"
                    value={formData.work[index]?.projectName || ''}
                    onChange={(e) => handleChange(e, index)}
                    placeholder={field.projectNamePlaceholder}
                    className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 text-gray-700"
                  />
                  <input
                    type="url"
                    name="projectLink"
                    value={formData.work[index]?.projectLink || ''}
                    onChange={(e) => handleChange(e, index)}
                    placeholder="Project Link"
                    className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 text-gray-700"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  name="info"
                  value={formData.work[index]?.info || ''}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={field.projectNamePlaceholder}
                  className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 text-gray-700"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;