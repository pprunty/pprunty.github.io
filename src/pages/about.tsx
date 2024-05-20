import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
//   justify-content: center;
  padding: 25px;
  background-color: #f0f0f0;
  margin-top: 20px;
  min-height: 100vh; /* Ensure it covers the full viewport height */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: black;
  text-align: center;
  max-width: 600px;
  margin-top: 0.25rem;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Description>
        I have a B.A in Mathematics and English Literature, a MSc. in High-Performance Computing, over 4 years of experience working as a full-stack developer in areas of Healthcare and Artificial Intelligence.
        My name is Patrick Prunty... in my spare time I train triathlon, Brasillian Jiu Jitsu, hike and spent time with my loved ones.
      </Description>
      <Description>
        I offer a number of high-quality and free educational content on my YouTube channel Jigsaw Academy, which includes
      </Description>
      <Description>
        Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
      </Description>
    </Container>
  );
};

export default About;
