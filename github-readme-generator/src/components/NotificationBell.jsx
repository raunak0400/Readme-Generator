import React from 'react';
import styled from 'styled-components';

const Button = () => {
    return (
        <StyledWrapper>
            <button className="noti">
                <span className="noti-tooltip">Hover over the icons for name</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16" style={{color: 'white'}}>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z" />
                </svg>
                {/* <svg viewBox="0 0 448 512" className="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg> */}
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .noti {
    bottom: -3px;
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(44, 44, 44);
    border-radius: 50%;
    cursor: pointer;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
    border: none;
    // z-index: 1000;
  }

  .bell {
    width: 18px;
  }

  .bell path {
    fill: white;
  }

  .noti-tooltip {
    visibility: hidden;
    opacity: 0;
    width: max-content;
    background: #222;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 6px 12px;
    position: absolute;
    z-index: 10;
    left: -12px;
    top: 50%;
    transform: translate(-100%, -50%);
    font-size: 0.95rem;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transition: opacity 0.2s;
    pointer-events: none;
  }

  .noti:hover .noti-tooltip {
    visibility: visible;
    opacity: 1;
  }

  .noti-tooltip::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -12px;
    transform: translateY(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent transparent #222;
  }

  .button:hover {
    background-color: rgb(56, 56, 56);
  }

  .button:hover .bell {
    animation: bellRing 0.9s both;
  }

  /* bell ringing animation keyframes*/
  @keyframes bellRing {
    0%,
    100% {
      transform-origin: top;
    }

    15% {
      transform: rotateZ(10deg);
    }

    30% {
      transform: rotateZ(-10deg);
    }

    45% {
      transform: rotateZ(5deg);
    }

    60% {
      transform: rotateZ(-5deg);
    }

    75% {
      transform: rotateZ(2deg);
    }
  }

  .button:active {
    transform: scale(0.8);
  }`;

export default Button;
