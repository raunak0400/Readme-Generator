import React from "react";
import NotificationBell from "./NotificationBell";

// Importing icons from react-icons
import {
  FaGithub, FaTwitter, FaDev, FaCodepen, FaStackOverflow, FaLinkedin, FaFacebook, FaInstagram,
  FaMedium, FaYoutube, FaReddit, FaTwitch, FaDiscord, FaDribbble, FaBehance, FaPinterest,
  FaTelegram, FaSlack, FaWhatsapp
} from "react-icons/fa";
import Back2Top from "./Back2Top";

const SOCIALS = [
  { name: 'GitHub', key: 'github', placeholder: 'GitHub username or link', icon: <img src="https://img.icons8.com/ios-filled/100/github.png" alt="GitHub" style={{ height: 32 }} /> },
  { name: 'Twitter', key: 'twitter', placeholder: 'Twitter link', icon: <img src="https://img.icons8.com/ios/100/twitterx--v1.png" alt="Twitter" style={{ height: 32 }} /> },
  { name: 'Dev.to', key: 'devto', placeholder: 'Dev.to username', icon: <img src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/112/external-dev-community-where-programmers-share-ideas-and-help-each-other-grow-logo-fresh-tal-revivo.png" alt="Dev.to" style={{ height: 32 }} /> },
  { name: 'CodePen', key: 'codepen', placeholder: 'CodePen username', icon: <img src="https://img.icons8.com/ios/100/codepen.png" alt="CodePen" style={{ height: 32 }} /> },
  { name: 'Stack Overflow', key: 'stackoverflow', placeholder: 'Stack Overflow user ID', icon: <img src="https://img.icons8.com/fluency/96/stackoverflow.png" alt="Stack Overflow" style={{ height: 32 }} /> },
  { name: 'LinkedIn', key: 'linkedin', placeholder: 'LinkedIn username', icon: <img src="https://img.icons8.com/color/96/linkedin-circled--v1.png" alt="LinkedIn" style={{ height: 32 }} /> },
  { name: 'Facebook', key: 'facebook', placeholder: 'Facebook username', icon: <img src="https://img.icons8.com/color/96/facebook-new.png" alt="Facebook" style={{ height: 32 }} /> },
  { name: 'Instagram', key: 'instagram', placeholder: 'Instagram username', icon: <img src="https://img.icons8.com/ios/100/instagram-new.png" alt="Instagram" style={{ height: 32 }} /> },
  { name: 'Medium', key: 'medium', placeholder: 'Medium username (with @)', icon: <img src="https://img.icons8.com/sf-regular/96/medium-logo.png" alt="Medium" style={{ height: 32 }} /> },
  { name: 'YouTube', key: 'youtube', placeholder: 'YouTube channel name', icon: <img src="https://img.icons8.com/color/96/youtube-play.png" alt="YouTube" style={{ height: 32 }} /> },
  { name: 'Reddit', key: 'reddit', placeholder: 'Reddit username', icon: <img src="https://img.icons8.com/fluency/96/reddit.png" alt="Reddit" style={{ height: 32 }} /> },
  { name: 'Twitch', key: 'twitch', placeholder: 'Twitch username', icon: <img src="https://img.icons8.com/color/96/twitch--v1.png" alt="Twitch" style={{ height: 32 }} /> },
  { name: 'Discord', key: 'discord', placeholder: 'Discord username', icon: <img src="https://img.icons8.com/color/96/discord--v2.png" alt="Discord" style={{ height: 32 }} /> },
  { name: 'Dribbble', key: 'dribbble', placeholder: 'Dribbble username', icon: <img src="https://img.icons8.com/fluency/96/dribbble.png" alt="Dribbble" style={{ height: 32 }} /> },
  { name: 'Behance', key: 'behance', placeholder: 'Behance username', icon: <img src="https://img.icons8.com/color/96/behance.png" alt="Behance" style={{ height: 32 }} /> },
  { name: 'Pinterest', key: 'pinterest', placeholder: 'Pinterest username', icon: <img src="https://img.icons8.com/color/96/pinterest--v1.png" alt="Pinterest" style={{ height: 32 }} /> },
  { name: 'Telegram', key: 'telegram', placeholder: 'Telegram username', icon: <img src="https://img.icons8.com/color/96/telegram-app--v1.png" alt="Telegram" style={{ height: 32 }} /> },
  { name: 'WhatsApp', key: 'whatsapp', placeholder: 'WhatsApp number or link', icon: <img src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp" style={{ height: 32 }} /> },
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
  // Add loading state for modal
  const [loading, setLoading] = React.useState(false);

  // Example payment methods (add your own as needed)
  const paymentMethods = [
    {
      details: "abhijeetbhale7-2@okaxis",
      description: "Scan the QR or use the UPI ID to pay.",
      qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=abhijeetbhale7-2@okaxis",
    },
  ];

  return (
    <>
      {/* Socials Card */}
      <div className="mb-6" id="socials">
        <h2 className="text-xl font-bold mb-2" style={{ fontSize: '2rem' }}>Socials
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
                minWidth: '350px',
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
                  <strong>Tip:</strong> Make sure you add your social <span style={{ color: '#60a5fa' }}>username</span> properly, kindly check the <span style={{ color: '#60a5fa' }}>username</span> twice before adding it!
                </div>
              </div>
            </span>
        </h2>
        
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
          right: "14px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px", // space between buttons
        }}
      >
        {!showModal && <Back2Top />}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px", // space between bell and support button
            marginLeft: "-16px",
          }}
        >
          {!showModal && <NotificationBell />}
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
              onClick={() => {
                setLoading(true);
                setShowModal(true);
                setTimeout(() => setLoading(false), 1000); // Show loading for 1s
              }}
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
                <img src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="Coffee Cup" style={{ width: "40px", height: "40px" }} />
              </span>
            </button>
          )}
        </div>
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
                bottom: "80px",
                right: "0px",
                zIndex: 1050,
                minWidth: "260px",
                maxWidth: "320px",
                borderRadius: "18px",
                overflow: "hidden",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                background: "rgba(255, 255, 255, 0.18)",
                border: "1.5px solid rgba(255, 255, 255, 0.22)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.22), 0 0 16px 0 #fbbf2440",
                transition: "all 0.3s cubic-bezier(.4,2,.3,1)",
              }}
            >
              <div
                className="relative flex flex-col items-center border-none"
                style={{
                  minHeight: "320px",
                  justifyContent: "center",
                  padding: "2.5rem 1.2rem 2.5rem 1.2rem",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.65)",
                  boxShadow: "0 2px 16px 0 rgba(31, 38, 135, 0.10)",
                  border: "none",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  transition: "all 0.3s cubic-bezier(.4,2,.3,1)",
                }}
              >
                {/* Show loading animation if loading is true */}
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '220px', width: '100%' }}>
                    <div className="pulsar"></div>
                  </div>
                ) : (
                  <>
                    {/* Close Button at Top Right */}
                    <button
                      id="close-btn"
                      className="absolute top-2 right-2 p-1 rounded-full bg-white/70 hover:bg-white/90 text-gray-700 hover:text-gray-900 shadow transition border border-white/40"
                      onClick={() => setShowModal(false)}
                      aria-label="Close"
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        boxShadow: "0 1px 6px rgba(31,38,135,0.10)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        transition: "all 0.2s cubic-bezier(.4,2,.3,1)",
                      }}
                    >
                      <span>&#x2715;</span>
                    </button>
                    <div className="flex flex-col items-center justify-center w-full h-full text-center gap-2" id="support">
                      <h2 className="text-xl font-bold mb-3 mt-2 w-full tracking-tight text-gray-800 drop-shadow-sm">Support Me</h2>
                      <div className="grid gap-3 w-full justify-items-center">
                        {paymentMethods.map((method) => (
                          <div key={method.name} className="flex flex-col items-center border rounded px-4 py-4 bg-gray-50 w-full">
                            <div className="flex items-center gap-2 mb-2 justify-center">
                              {method.icon}
                              <span className="font-semibold text-gray-700 text-base">{method.name}</span>
                            </div>
                            <div className="mb-1 text-xs text-gray-700 text-center opacity-80">{method.description}</div>
                            {method.qr && (
                              <div className="mb-1 w-24 h-24 flex items-center justify-center rounded-md shadow mx-auto border border-white/30 bg-white">
                                <img src={method.qr} alt={`${method.name} QR`} className="w-20 h-20 object-contain" style={{ background: "transparent" }} />
                              </div>
                            )}
                            <div className="text-xs text-gray-600 break-all text-center opacity-80">{method.details}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SocialsSection;
