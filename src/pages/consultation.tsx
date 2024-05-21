import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FFFFFF;
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

const Consultation: React.FC = () => {
  return (
  <>
          <Head>
              <title>Patrick Prunty - Consultation</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content="Book a consultation service with me." />
              <link rel="icon" href="/patrickprunty/images/favicon.ico" />
          </Head>
    <Container>
      <Description>Welcome to My Next.js Consultation Page!</Description>
      <Description>General chat: €</Description>
      <Description>Welcome to My Next.js Consultation Page!</Description>
      <Description>Welcome to My Next.js Consultation Page!</Description>
      <Description>Welcome to My Next.js Consultation Page!</Description>
      <Description>Welcome to My Next.js Consultation Page!</Description>

    </Container>
    </>
  );
};

export default Consultation;
