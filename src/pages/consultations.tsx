import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { InlineWidget } from "react-calendly";

const Title = styled.h1`
  font-size: 6vw;
  font-weight: 600;
  line-height: .9em;
  color: black;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
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
  margin-bottom: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding-bottom: 5px;
  }
`;

const WidgetContainer = styled.div`
  width: 100vw;
  height: 80vh; // You can adjust this as needed
  overflow: hidden; // Hides the overflow, including scrollbars
  scrolling: no;
  padding-left: 10px;
  padding-right: 10px;
  resize: both; // Allows resizing to test different sizes
  margin-top: 0px !important;
  margin-bottom: 0px !important;

  @media (max-width: 480px) {
    height: 95vh;
  }

  @media (max-width: 768px) {
    width: auto;
    height: 200vw !important;
  }
`;

const Consultation = () => {
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
      <WidgetContainer>
        <InlineWidget
          url="https://calendly.com/jigsawpresents"
          pageSettings={{
            backgroundColor: 'fff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '333',
            textColor: '333'
          }}
          styles={{
          marginTop: '0px',
          marginBottom: '0px',
          width: '100vw',
          height: '200vw',
          }}
        />
      </WidgetContainer>
    </>
  );
};

Consultation.displayName = "Consultation";

export default Consultation;
