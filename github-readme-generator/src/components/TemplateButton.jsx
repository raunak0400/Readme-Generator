import React from 'react';
import styled from 'styled-components';

// This component now accepts 'text' and 'onClick' props to make it reusable
const TemplateButton = ({ text, onClick }) => {
  return (
    // The onClick event is now handled by the main wrapper div
    <StyledWrapper onClick={onClick}>
      <div className="button">
        <span className="button__text">{text}</span>
        <span className="button__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height={24} fill="none" className="svg">
            <line y2={19} y1={5} x2={12} x1={12} />
            <line y2={12} y1={12} x2={19} x1={5} />
          </svg>
        </span>
      </div>
    </StyledWrapper>
  );
}

// All the styles you provided are here, wrapped in the styled-component
const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #34974d;
    background-color: #3aa856;
    border-radius: 6px; // Added a border-radius for softer edges
  }

  .button, .button__icon, .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    transform: translateX(25px); // Adjusted for better centering
    color: #fff;
    font-weight: 600;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #34974d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 5px; // Match parent border-radius
    border-bottom-right-radius: 5px; // Match parent border-radius
  }

  .button .svg {
    width: 30px;
    stroke: #fff;
  }

  .button:hover {
    background: #34974d;
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  .button:active .button__icon {
    background-color: #2e8644;
  }

  .button:active {
    border: 1px solid #2e8644;
  }
`;

export default TemplateButton;