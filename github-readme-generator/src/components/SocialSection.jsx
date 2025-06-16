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
      // name: "UPI",
      details: "abhijeetbhale7-2@okaxis",
      // icon: <SiBuymeacoffee size={32} />,
      description: "Scan the QR or use the UPI ID to pay.",
      qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=abhijeetbhale7-2@okaxis",
    },
    // Add more payment methods here if needed
    // { name: "PayPal", details: "your-paypal-link", icon: <FaPaypal />, ... }
  ];

  return (
    <>
      {/* Socials Card */}
      <div className="mb-6" id="socials">
        <h2 className="text-xl font-bold mb-2" style={{ fontSize: '2rem' }}>Socials</h2>
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

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
        }}
      >
        {!showModal && (
          <button
            type="button"
            id="support-btn"
            className="bg-orange-500 text-white font-semibold w-16 h-16 flex items-center justify-center shadow-lg text-3xl border"
            style={{
              borderWidth: "4px",
              borderColor: "#fb923c",
              borderRadius: "50%",
              width: "64px",
              marginRight: "36px",
              height: "64px",
              aspectRatio: "1/1",
              backgroundColor: "#fb923c",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
            onClick={() => setShowModal(true)}
            title="Buy me a coffee"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <SiBuymeacoffee size={40} style={{ display: "block", margin: "auto" }} />
            </span>
          </button>
        )}

        {/* Modal just above the button */}
        {showModal && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              style={{ zIndex: 1040 }}
              onClick={() => setShowModal(false)}
            />
            {/* Modal */}
            <div
              className="absolute"
              style={{
                bottom: "80px", // 64px button + 16px gap
                right: "0px",
                zIndex: 1050,
                minWidth: "320px",
                maxWidth: "360px",
                
              }}
            >
              <div
                className="relative bg-white rounded-lg shadow-lg flex flex-col items-center border"
                style={{
                  borderColor: "#e5e7eb",
                  background: "#fff",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  minHeight: "350px",
                  justifyContent: "center",
                  padding: "2rem 2rem 2rem 2rem",
                  borderRadius: "12px",
                }}
              >
                {/* Close Button at Top Right */}
                <button
                  id="close-btn"
                  className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> */}
                  <span>&#x2715;</span>
                </button>

                <div className="flex flex-col items-center justify-center w-full h-full text-center" id="support">
                  <h2 className="text-xl font-bold mb-4 mt-2 w-full">Support Me</h2>
                  <div className="grid gap-4 w-full justify-items-center">
                    {paymentMethods.map((method) => (
                      <div key={method.name} className="flex flex-col items-center border rounded px-4 py-4 bg-gray-50 w-full">
                        <div className="flex items-center gap-2 mb-2 justify-center">
                          {method.icon}
                          <span className="font-semibold">{method.name}</span>
                        </div>
                        <div className="mb-2 text-sm text-gray-700 text-center">{method.description}</div>
                        {method.qr && (
                          <img src={method.qr} alt={`${method.name} QR`} className="mb-2 w-32 h-32 rounded shadow mx-auto" />
                        )}
                        <div className="text-xs text-gray-600 break-all text-center">{method.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SocialsSection;
