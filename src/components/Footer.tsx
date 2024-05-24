import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContactDiv>
        <FooterLinkBlock href="https://www.linkedin.com/in/patrickprunty/" target="_blank">
          <SocialLink>Linkedin</SocialLink>
        </FooterLinkBlock>
        <FooterLinkBlock href="mailto:pprunty@tcd.ie">
          <SocialLink>Email</SocialLink>
        </FooterLinkBlock>
        <FooterLinkBlock href="https://www.strava.com/athletes/72636452" target="_blank">
          <SocialLink>Strava</SocialLink>
        </FooterLinkBlock>
      </FooterContactDiv>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Neuemontreal', sans-serif;
  box-sizing: border-box;
  min-width: 100%;
//   border-top: 2px solid #000;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 4rem;

  @media (max-width: 767px) {
    margin-top: 2rem;
  }
`;

const FooterContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  border-top: 1px solid #333;
`;

const FooterLinkBlock = styled.a`
  text-decoration: none;
  color: #333;
  padding: 40px;
  flex: 1;
  text-align: center;
  border-right: 1px solid #333;

  &:last-child {
    border-right: none;
  }

  &:hover {
      color: #B3B3B3;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    padding: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

const SocialLink = styled.h2`
  font-size: 2rem;

  font-weight: 500;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    text-decoration: none;
`;
