import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// --- Keyframes and Overlay (for modal behavior) ---
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

// --- Card Styles (Adapted from your provided code) ---

const CardContainer = styled.div`
  width: 320px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 30px;
  gap: 15px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  /* Positioning to center on screen */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`;

const StyledSVG = styled.svg`
  width: 50px;
  path {
    fill: #7b57ff; /* Matched to primary button color */
  }
`;

const CardHeading = styled.p`
  font-size: 1.2em;
  font-weight: 800;
  color: rgb(26, 26, 26);
  margin: 0;
`;

const CardDescription = styled.p`
  text-align: center;
  font-size: 0.8em;
  font-weight: 600;
  color: rgb(99, 99, 99);
  margin: 0;
`;

const KeywordInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  text-align: center;
  font-size: 0.9em;
  box-sizing: border-box;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: #9173ff;
    box-shadow: 0 0 0 2px rgba(123, 87, 255, 0.2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 90px;
  height: 35px;
  transition-duration: .2s;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
  font-size: 0.9em;
`;

const PrimaryButton = styled(Button)`
  background-color: #7b57ff;
  color: rgb(241, 241, 241);

  &:hover {
    background-color: #9173ff;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: rgb(235, 235, 235);
  color: rgb(46, 46, 46);
  
  &:hover {
    background-color: #dcdcdc;
  }
`;

// --- Main Component ---

const AIPopUp = ({ onGenerate, onClose }) => {
  const [keywords, setKeywords] = useState('');

  const handleGenerate = () => {
    if (keywords.trim()) {
      onGenerate(keywords);
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <>
      <PopupOverlay onClick={onClose} />

      <CardContainer>
        <StyledSVG version="1.1" viewBox="0 0 16 16">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-openai">
            <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z" />
          </svg>
        </StyledSVG>
        <CardHeading>Generate with AI</CardHeading>
        <CardDescription>
          Enter a few keywords below to create a unique description.
        </CardDescription>

        <KeywordInput
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g., passionate, react, frontend"
          autoFocus
        />

        <ButtonContainer>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleGenerate}>Generate</PrimaryButton>
        </ButtonContainer>
      </CardContainer>
    </>
  );
};

export default AIPopUp;