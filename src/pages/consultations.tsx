import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Title = styled.h1`
  font-size: 6vw;
  font-weight: 600;
  line-height: .9em;
  color: black;
  width: 100%;
  text-align: left;
  margin-bottom: 20px; /* Add margin to separate title from case studies */

  @media(max-width: 768px) {
    font-size: 8vw;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #666;
  width: 100%;
  text-align: left;
  margin-bottom: 40px; /* Add margin to separate subtitle from case studies */
  padding-bottom: 40px;
//   border-bottom: 2px solid black;

  @media(max-width: 768px) {
    font-size: 1.25rem;
      padding-bottom: 5px;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  max-width: 555px;
  height: 150vh;
  max-height: 720px;
  border: 0;

  @media (max-width: 768px) {
    height: 150vh; /* Adjust height for tablets and smaller screens */
  }

  @media (max-width: 480px) {
    height: 95vh; /* Adjust height for mobile devices */
  }
`;

const Consultation: React.FC = () => {
  return (
    <>
      <Head>
        <title>Patrick Prunty - Consultations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Book a consultation service with me." />
        <meta property="og:type" content="product" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Title>Consultation Services</Title>
      <Subtitle>Interested in collaborating with me on a project, or looking for personal guidance? Book a one-on-one consultation with me to discuss your projects, ideas, or any questions you have. I look forward to connecting with you and helping you achieve your goals.</Subtitle>
      <StyledIframe
        src="https://patrick0dys.setmore.com/patrick?lang=english"
        scrolling="yes"
        allowFullScreen
      />
    </>
  );
};

export default Consultation;
