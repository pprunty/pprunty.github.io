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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="black" color="black">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z" fill="currentColor"></path>
        </svg>
      </IconButton>
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
  padding: 0;
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
  width: 45%;
  margin-top: 10px;
  background: black;
  color: white;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-weight: 300;
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
