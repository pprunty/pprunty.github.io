import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ShareButton = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;
    const text = 'Check out this blog post!';

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setIsNotificationVisible(true);
        setTimeout(() => setIsNotificationVisible(false), 2000); // Hide the notification after 2 seconds
      } catch (error) {
        console.error('Failed to copy URL:', error);
        alert('Failed to copy URL. Please copy it manually: ' + url);
      }
    }
  };

  return (
    <>
      <IconButton onClick={handleShare} aria-label="Share">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M242.57-60q-25.79 0-44.18-18.39T180-122.57v-449.07q0-25.79 18.39-44.18 18.39-18.38 44.18-18.38h126.25v50.25H242.57q-4.62 0-8.47 3.85-3.84 3.84-3.84 8.46v449.07q0 4.62 3.84 8.47 3.85 3.84 8.47 3.84h474.86q4.62 0 8.47-3.84 3.84-3.85 3.84-8.47v-449.07q0-4.62-3.84-8.46-3.85-3.85-8.47-3.85H590.36v-50.25h127.07q25.79 0 44.18 18.38Q780-597.43 780-571.64v449.07q0 25.79-18.39 44.18T717.43-60H242.57Zm211.89-283.13v-446.1l-85.64 85.64-36.05-36 146.82-146.56 146.56 146.56-35.79 36-85.64-85.64v446.1h-50.26Z"/></svg>      </IconButton>
      {isNotificationVisible && (
        <Notification>
          <p>Link copied</p>
        </Notification>
      )}
    </>
  );
};

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  margin: 0;

  svg {
    width: 30px;
    height: 30px;
    fill: black !important; // Ensure the fill is set to black by default
    transition: fill 0.3s;

    &:hover {
      fill: black !important;
    }
  }

  @media (max-width: 480px) {
      svg {
        width: 36px;
        height: 36px;
        fill: black !important; // Ensure the fill is set to black by default
        transition: fill 0.3s;
        padding-right: 5px;
        padding-bottom: 5px;

        &:hover {
            fill: black !important;
        }
      }
  }
`;

const fadeInOut = keyframes`
  0% {
    top: -50px;
    opacity: 0;
  }
  10% {
    top: 0;
    opacity: 1;
  }
  90% {
    top: 0;
    opacity: 1;
  }
  100% {
    top: -50px;
    opacity: 0;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 40px;
  margin-top: 10px;
  background: black;
  color: white;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-weight: 400;
  animation: ${fadeInOut} 2s ease-out forwards;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 80%;
  }

  p {
    margin: 0;
  }
`;

export default ShareButton;
