import React from 'react';
import styled from 'styled-components';
import ExportedImage from "next-image-export-optimizer";

const Footer: React.FC = () => {
  return (
    <>
      <LogoWrapper>
        <ExportedImage
                  src='/images/book_guy.svg'
                  alt="logo"
                  layout="intrinsic" // Changed from responsive to intrinsic for better control over size
                  width={300} // Adjusted width
                  height={200} // Adjusted height
                  placeholder="blur"
                  unoptimized={true}
                />
      </LogoWrapper>
      <FooterContainer>
        <FooterContactDiv>
          <FooterLinkBlock href="https://www.linkedin.com/in/patrickprunty/" target="_blank">
            <SocialLink>LinkedIn</SocialLink>
          </FooterLinkBlock>
          <FooterLinkBlock href="mailto:pprunty@tcd.ie">
            <SocialLink>Email</SocialLink>
          </FooterLinkBlock>
          <FooterLinkBlock href="https://www.strava.com/athletes/72636452" target="_blank">
            <SocialLink>Strava</SocialLink>
          </FooterLinkBlock>
        </FooterContactDiv>
      </FooterContainer>
    </>
  );
};

export default Footer;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0; // No gap between logo and footer
`;

const FooterContainer = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Neuemontreal', sans-serif;
  box-sizing: border-box;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F0F0F0;
  margin-top: 0; // Ensure no margin top to align with the logo above

  @media (max-width: 767px) {
//     margin-top: 40px;
  }
`;

const FooterContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  border-top: 2px solid black;
`;

const FooterLinkBlock = styled.a`
  text-decoration: none;
  color: #333;
  padding: 40px;
  flex: 1;
  text-align: center;
  border-right: 2px solid black;

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
    font-size: 1.4rem;
  }
  text-decoration: none;
`;
