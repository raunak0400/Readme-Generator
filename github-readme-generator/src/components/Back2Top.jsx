import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Back2Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <StyledWrapper>
      <StyledButton onClick={scrollToTop}>
        <StyledSvgIcon viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </StyledSvgIcon>
        <ButtonLabel>Back to Top</ButtonLabel>
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    width: 140px;
    border-radius: 50px;
    background-color: rgb(181, 160, 255);
  }

  &:hover svg {
    transform: translateY(-220%);
  }

  &:hover span {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
  }
`;

const StyledSvgIcon = styled.svg`
  width: 12px;
  transition: transform 0.3s ease;

  path {
    fill: white;
  }
`;

const ButtonLabel = styled.span`
  position: absolute;
  bottom: -20px;
  color: white;
  font-size: 0px;
  transition: all 0.3s ease;
  opacity: 0;
`;

export default Back2Top;
