import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 20px;
  margin-top: 25px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #333;
  text-align: center;
  max-width: 600px;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  text-align: center; /* Center the list */
  width: 100%;
  max-width: 600px;
`;

const ContactItem = styled.li`
  margin: 0.5rem 0;
  font-weight: 600;

  a {
    color: #FF70CF; /* Update link color */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Patrick Prunty - Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/patrickprunty/images/favicon.ico" />
      </Head>
      <Container>
        <ContactList>
          <ContactItem>📧 E-MAIL: <a href="mailto:pprunty@tcd.ie">pprunty@tcd.ie</a></ContactItem>
          <ContactItem>🐙 GITHUB: <a href="https://github.com/pprunty" target="_blank" rel="noopener noreferrer">@pprunty</a></ContactItem>
          <ContactItem>🎥 YOUTUBE: <a href="https://www.youtube.com/@patrickprunty" target="_blank" rel="noopener noreferrer">@patrickprunty</a></ContactItem>
          <ContactItem>🏃🏼 STRAVA: <a href="https://www.strava.com/athletes/72636452" target="_blank" rel="noopener noreferrer">Patrick Prunty</a></ContactItem>
          <ContactItem>🧑🏼‍💻 LINKEDIN: <a href="https://www.linkedin.com/in/patrickprunty/" target="_blank" rel="noopener noreferrer">Patrick Prunty</a></ContactItem>
          <ContactItem>🏷️ SUBSTACK: <a href="https://substack.com/@patrickprunty" target="_blank" rel="noopener noreferrer">@patrickprunty</a></ContactItem>
          <ContactItem>📝 CV: Available upon request.</ContactItem>
        </ContactList>
      </Container>
    </>
  );
};

export default Contact;
