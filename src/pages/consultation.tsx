import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem; /* Add some padding for small screens */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-top: 1rem;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  max-width: 555px;
  height: 80vh;
  max-height: 720px;
  border: 0;

  @media (max-width: 768px) {
    height: 70vh; /* Adjust height for tablets and smaller screens */
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
        <link rel="icon" href="/patrickprunty/images/favicon.ico" />
      </Head>
      <Container>
        <StyledIframe
          src="https://patrick0dys.setmore.com/patrick?lang=english"
          scrolling="no"
          allowFullScreen
        />
      </Container>
    </>
  );
};

export default Consultation;
