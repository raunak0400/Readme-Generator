import React from "react";
// Importing icons from react-icons
import {
  FaGithub, FaTwitter, FaDev, FaCodepen, FaStackOverflow, FaLinkedin, FaFacebook, FaInstagram,
  FaMedium, FaYoutube, FaReddit, FaTwitch, FaDiscord, FaDribbble, FaBehance, FaPinterest,
  FaTelegram, FaSlack, FaWhatsapp
} from "react-icons/fa";

const SOCIALS = [
  { name: 'GitHub', key: 'github', placeholder: 'GitHub username or link', icon: <FaGithub /> },
  { name: 'Twitter', key: 'twitter', placeholder: 'Twitter link', icon: <FaTwitter /> },
  { name: 'Dev.to', key: 'devto', placeholder: 'Dev.to username', icon: <FaDev /> },
  { name: 'CodePen', key: 'codepen', placeholder: 'CodePen username', icon: <FaCodepen /> },
  { name: 'Stack Overflow', key: 'stackoverflow', placeholder: 'Stack Overflow user ID', icon: <FaStackOverflow /> },
  { name: 'LinkedIn', key: 'linkedin', placeholder: 'LinkedIn username', icon: <FaLinkedin /> },
  { name: 'Facebook', key: 'facebook', placeholder: 'Facebook username', icon: <FaFacebook /> },
  { name: 'Instagram', key: 'instagram', placeholder: 'Instagram username', icon: <FaInstagram /> },
  { name: 'Medium', key: 'medium', placeholder: 'Medium username (with @)', icon: <FaMedium /> },
  { name: 'YouTube', key: 'youtube', placeholder: 'YouTube channel name', icon: <FaYoutube /> },
  { name: 'Reddit', key: 'reddit', placeholder: 'Reddit username', icon: <FaReddit /> },
  { name: 'Twitch', key: 'twitch', placeholder: 'Twitch username', icon: <FaTwitch /> },
  { name: 'Discord', key: 'discord', placeholder: 'Discord username', icon: <FaDiscord /> },
  { name: 'Dribbble', key: 'dribbble', placeholder: 'Dribbble username', icon: <FaDribbble /> },
  { name: 'Behance', key: 'behance', placeholder: 'Behance username', icon: <FaBehance /> },
  { name: 'Pinterest', key: 'pinterest', placeholder: 'Pinterest username', icon: <FaPinterest /> },
  { name: 'Telegram', key: 'telegram', placeholder: 'Telegram username', icon: <FaTelegram /> },
  { name: 'Slack', key: 'slack', placeholder: 'Slack workspace or username', icon: <FaSlack /> },
  { name: 'WhatsApp', key: 'whatsapp', placeholder: 'WhatsApp number or link', icon: <FaWhatsapp /> },
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
      <div className="grid gap-3" id="socials-grid">
        {SOCIALS.map((social) => (
          <div key={social.key} className="flex items-center gap-2" id="socials-item">
            <span className="text-xl w-6 flex-shrink-0" style={{ fontSize: 34 }}>
              {social.icon}
            </span>
            <input
              id="socials-input"
              type="url"
              className="flex-1 border rounded px-2 py-1"
              placeholder={social.name}
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
