import React, { useState } from 'react';
import styled from 'styled-components';
import { templates } from './Template.js';
import AIPopup from './AIPopUp.jsx';
import AIGenerateButton from './AIGenerateButton.jsx';

const TemplateDropdown = ({ setFormData, showNotification }) => {
  const handleSelectTemplate = (template) => {
    setFormData(template.data);
    showNotification(`${template.name} Template applied`);
  };

  return (
    <StyledWrapper>
      <div className="menu">
        <div className="item">
          <a href="#" className="link">
            <span>Templates</span>
            <svg viewBox="0 0 360 360" xmlSpace="preserve">
              <g id="SVGRepo_iconCarrier">
                <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
              </g>
            </svg>
          </a>
          <div className="submenu">
            {templates.map((template, idx) => (
              <div className="submenu-item" key={idx}>
                <a
                  href="#"
                  className="submenu-link"
                  onClick={e => {
                    e.preventDefault();
                    handleSelectTemplate(template);
                  }}
                >
                  <div className="template-name">{template.name}</div>
                  <div className="template-desc">{template.description}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .menu {
    font-size: 16px;
    line-height: 1.6;
    color: #000000;
    width: fit-content;
    display: flex;
    list-style: none;
    z-index: 1000;
    position: relative;
  }

  .menu a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .menu .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 36px;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a3cff;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link svg {
    width: 14px;
    height: 14px;
    fill: #000000;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .item {
    position: relative;
    z-index: 1000;
  }

  .menu .item .submenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    border-radius: 0 0 16px 16px;
    left: 0;
    width: 100%;
    overflow: hidden;
    border: 1px solid #cccccc;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1000;
    pointer-events: none;
    list-style: none;
  }

  .menu .item:hover .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
    border-top: transparent;
    border-color: #0a3cff;
  }

  .menu .item:hover .link {
    color: #ffffff;
    border-radius: 16px 16px 0 0;
  }

  .menu .item:hover .link::after {
    transform: scaleX(1);
    transform-origin: right;
  }

  .menu .item:hover .link svg {
    fill: #ffffff;
    transform: rotate(-180deg);
  }

  .submenu .submenu-item {
    width: 100%;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link {
    display: block;
    padding: 12px 24px;
    width: 100%;
    position: relative;
    text-align: center;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-item:last-child .submenu-link {
    border-bottom: none;
  }

  .submenu .submenu-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 100%;
    background-color: #0a3cff;
    z-index: -1;
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link:hover:before {
    transform: scaleX(1);
    transform-origin: right;
  }

  .submenu .submenu-link:hover {
    color: #ffffff;
  }

  .template-name {
    font-weight: bold;
    font-size: 15px;
    color: inherit;
    margin-bottom: 2px;
  }
  .template-desc {
    font-size: 12px;
    color: #bdbdbd;
    margin-bottom: 2px;
    color: inherit;
  }
`;

const TitleSection = ({ formData, setFormData, showNotification, generateAIDescription }) => {
  const [titleFocused, setTitleFocused] = React.useState(false);
  const [descFocused, setDescFocused] = React.useState(false);
  const [showAIPopup, setShowAIPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDescription = (keywords) => {
    const description = generateAIDescription(keywords);
    setFormData({ ...formData, description });
  };


  return (
    <div className="card" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Flex row for top bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%' }}>
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
          <TemplateDropdown setFormData={setFormData} showNotification={showNotification} />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem', width: '50%' }}>Title</h2>
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
      <div className="flex items-center" id='subtitle'>
        <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem', width: '50%', marginRight: '-530px' }}>Subtitle
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
          <AIGenerateButton onClick={() => setShowAIPopup(true)} />
      </div>
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
      {showAIPopup && <AIPopup onGenerate={handleGenerateDescription} onClose={() => setShowAIPopup(false)} />}
    </div>
  );
};

export default TitleSection;