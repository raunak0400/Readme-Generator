import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

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

  // State for modal visibility
  const [showModal, setShowModal] = React.useState(false);

  // Example payment methods (add your own as needed)
  const paymentMethods = [
    {
      name: "UPI",
      details: "abhijeetbhale7-2@okaxis", 
      icon: <SiBuymeacoffee size={32} />,
      description: "Scan the QR or use the UPI ID to pay.",
      qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=abhijeetbhale7-2@okaxis",
    },
    // Add more payment methods here if needed
    // { name: "PayPal", details: "your-paypal-link", icon: <FaPaypal />, ... }
  ];

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

      {/* Buy Me a Coffee Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Support Me</h3>
            {paymentMethods.map((method) => (
              <div key={method.name} className="mb-4 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  {method.icon}
                  <span className="font-semibold">{method.name}</span>
                </div>
                <div className="mb-2 text-sm text-gray-700">{method.description}</div>
                {method.qr && (
                  <img src={method.qr} alt={`${method.name} QR`} className="mb-2 w-32 h-32" />
                )}
                <div className="text-xs text-gray-600 break-all">{method.details}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sticky Buy Me a Coffee Button */}
      {!showModal && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 1000,
          }}
        >
          <button
            type="button"
            className="bg-orange-500 text-white font-semibold w-16 h-16 flex items-center justify-center shadow-lg text-3xl border"
            style={{
              borderWidth: "4px",
              borderColor: "#fb923c",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
              aspectRatio: "1/1",
              marginRight: "56px",
              backgroundColor: "#fb923c",
              color: "#fff",
            }}
            onClick={() => setShowModal(true)}
            title="Buy me a coffee"
          >
            <span>
              <SiBuymeacoffee size={40} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialsSection;
