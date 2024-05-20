import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e7e7e7;

  @media (min-width: 736px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomIcon = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url('/path/to/your/custom-icon.png') no-repeat center center;
  background-size: cover;
`;

const FooterText = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
  text-align: center;

  @media (min-width: 736px) {
    margin-top: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <SocialIcon url="mailto:pprunty@tcd.ie" style={{ height: 30, width: 30 }} bgColor="#333" fgColor="#fff" />
        <SocialIcon url="https://www.youtube.com/@patrickprunty" target="_blank" rel="noopener noreferrer" style={{ height: 30, width: 30 }} bgColor="#333" fgColor="#fff" />
        <SocialIcon url="https://www.strava.com/athletes/72636452" target="_blank" rel="noopener noreferrer" style={{ height: 30, width: 30 }} bgColor="#333" fgColor="#fff" />
        <SocialIcon url="https://www.linkedin.com/in/patrickprunty/" target="_blank" rel="noopener noreferrer" style={{ height: 30, width: 30 }} bgColor="#333" fgColor="#fff" />
        <CustomIcon href="https://your-custom-url.com" target="_blank" rel="noopener noreferrer" />
      </SocialContainer>
      <FooterText>© 2024 Patrick Prunty. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
