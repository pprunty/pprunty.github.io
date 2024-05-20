import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: black;
  max-width: 600px;
  margin-top: 1rem;
`;

const ContactList = styled.ul`
  list-style-type: disc;
  padding-left: 20px; /* Add padding to align the bullets */
  margin-top: 1rem;
`;

const ContactItem = styled.li`
  margin-bottom: 0.5rem; /* Add some spacing between the list items */

  a {
    color: #0070f3; /* Link color */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <Description>
        I am active on GitHub and LinkedIn, but feel free to email me with any questions:
      </Description>
      <ContactList>
        <ContactItem>📧 Email: <a href="mailto:pprunty@tcd.ie">pprunty@tcd.ie</a></ContactItem>
        <ContactItem>🐙 GitHub: <a href="https://github.com/pprunty" target="_blank" rel="noopener noreferrer">@pprunty</a></ContactItem>
        <ContactItem>🎥 YouTube: <a href="https://www.youtube.com/@patrickprunty" target="_blank" rel="noopener noreferrer">@patrickprunty</a></ContactItem>
        <ContactItem>🏃🏼 Strava: <a href="https://www.strava.com/athletes/72636452" target="_blank" rel="noopener noreferrer">Patrick Prunty</a></ContactItem>
        <ContactItem>🧑🏼‍💻 LinkedIn: <a href="https://www.linkedin.com/in/patrickprunty/" target="_blank" rel="noopener noreferrer">Patrick Prunty</a></ContactItem>
        <ContactItem>📝 CV: Available upon request.</ContactItem>
        <ContactItem>🏷️ Substack: <a href="https://substack.com/@patrickprunty" target="_blank" rel="noopener noreferrer">@patrickprunty</a></ContactItem>
      </ContactList>
      <Description>
        If you are a small business or individual seeking website development, a fellow developer interested in project
        collaborations, or simply want to join me for a coffee or a run, please reach out to me via email. ☕️
      </Description>
    </Container>
  );
};

export default Contact;
