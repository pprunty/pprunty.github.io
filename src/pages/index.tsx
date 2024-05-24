import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import CaseStudy from '../components/CaseStudy'; // Adjust the import path as necessary

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #FFFFFF;
  margin-top: 20px;
  min-height: 100vh; /* Ensure it covers the full viewport height */
  width: 100%;
  box-sizing: border-box; /* Include padding in the width calculation */

  @media(min-width: 768px) {
    width: 80%; /* Increase the width to 90% on larger screens */
    max-width: 1400px; /* Optionally increase the max-width */
    margin-left: auto;
    margin-right: auto;
  }
`;

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

  @media(max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Home: React.FC = () => {
  // Example case studies data
  const caseStudies = [
    {
      title: "TrackR",
      description: "Web redesign, app design, packaging design and more for a device used to find your lost stuff.",
      imageUrl: "/images/afro.WEBP", // Update with the correct image path
      link: "trackr",
    },
    // Add more case studies here
  ];

  return (
    <>
      <Head>
        <title>Patrick Prunty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software, education, consultations & creative media." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:type" content="profile" />
      </Head>
      <Container>
        <Title>The Product & Design Work of Patrick Prunty</Title>
        <Subtitle>I am a full-stack web developer with a passion for software, education, consultations, and creative media. Explore my case studies below to learn more about my work.</Subtitle>
        {caseStudies.map((caseStudy, index) => (
          <CaseStudy
            key={index}
            title={caseStudy.title}
            description={caseStudy.description}
            imageUrl={caseStudy.imageUrl}
            link={caseStudy.link}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;
