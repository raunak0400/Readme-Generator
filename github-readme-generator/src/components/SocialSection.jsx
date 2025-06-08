import React from "react";
const SOCIALS = [
  { name: 'GitHub', key: 'github' },
  { name: 'LinkedIn', key: 'linkedin' },
  { name: 'Twitter', key: 'twitter' },
  { name: 'Instagram', key: 'instagram' },
  { name: 'YouTube', key: 'youtube' },
  { name: 'Facebook', key: 'facebook' },
];

const SocialsSection = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      socials: {
        ...formData.socials,
        [key]: value,
      },
    });
  };

  return (
    <div className="mb-6" id="socials">
      <h2 className="text-xl font-bold mb-2">Socials</h2>
      <div className="grid gap-3">
        {SOCIALS.map((social) => (
          <div key={social.key} className="flex items-center gap-2">
            <label className="w-24">{social.name}:</label>
            <input
              type="url"
              className="flex-1 border rounded px-2 py-1"
              placeholder={`Enter ${social.name} link`}
              value={formData.socials?.[social.key] || ''}
              onChange={(e) => handleChange(social.key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialsSection;
