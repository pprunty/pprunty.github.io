import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
//   justify-content: center;
  padding: 25px;
  background-color: #FFFFFF;
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
My name is Patrick Prunty and I’m a Fullstack Software Engineer at Optum Healthcare. Previously, I studied MSc. in High-Performance Computing at Trinity College Dublin and B.A Joint Honours in Mathematics and English Literature at University College Dublin (with minor in Portuguese). I am currently working on a couple of open source projects and the release of a mobile application to the iOS and Android app stores.

I do triathlon (swim, cycle and run), travel and follow Chelsea Football Club. I also write on a variety of topics ranging from science and technology to creative prose.        My name is Patrick Prunty... in my spare time I train triathlon, Brasillian Jiu Jitsu, hike and spent time with my loved ones.
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
