import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import CaseStudy from '../components/CaseStudy'; // Adjust the import path as necessary
import ExportedImage from 'next-image-export-optimizer';

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
      padding-bottom: 5px;
  }
`;

const AboutMeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 2px solid black;
  width: 100%; /* Make sure it takes full width */
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 40px 0;
  }
`;

const AboutMeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    padding-right: 20px;
    margin-bottom: 0;
  }
`;

const AboutMeTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media(max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const AboutMeDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0px;
`;

const CaseStudyLabel = styled.div`
  position: absolute;
//   left: 10px;
  font-size: 0.875rem;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media(max-width: 768px) {
    top: 30px;
    left: 10px;
  }
`;

const AboutMeImageWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  cursor: pointer;
//   transition: border-radius 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  margin-left: 0;

  @media(min-width: 768px) {
    width: 50%;
    margin-right: 20px;
  }

//   &:hover {
//     border-radius: 60px;
//   }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
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
    {
      title: "thelastmanstanding.io",
      description: "Web redesign, app design, packaging design and more for a device used to find your lost stuff.",
      imageUrl: "/images/IMG_5948.JPG", // Update with the correct image path
      link: "trackr",
    },
    {
      title: "Jigsaw Presents",
      description: "Web redesign, app design, packaging design and more for a device used to find your lost stuff.",
      imageUrl: "/images/jigsaw-presents.jpg", // Update with the correct image path
      link: "jigsaw-presents",
    },
    {
      title: "Jigsaw Academy",
      description: "Web redesign, app design, packaging design and more for a device used to find your lost stuff.",
      imageUrl: "/images/jigsaw-academy.jpg", // Update with the correct image path
      link: "jigsaw-academy",
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
      <Title>The Product & Design Work of Patrick Prunty</Title>
      <Subtitle>
        I am a full-stack web developer with a passion for software, education, and creative media. Explore my projects below to learn more about my work. If you wish to connect, I offer one-on-one consultations with me to discuss your projects, ideas, or any questions you have.
      </Subtitle>
      {caseStudies.map((caseStudy, index) => (
        <CaseStudy
          key={index}
          index={index} // Pass the index here
          title={caseStudy.title}
          description={caseStudy.description}
          imageUrl={caseStudy.imageUrl}
          link={caseStudy.link}
        />
      ))}
      <AboutMeContainer>
        <CaseStudyLabel>● About</CaseStudyLabel>
        <AboutMeImageWrapper>
          <ExportedImage
            src="/images/me.JPG" // Update with the correct image path
            alt="About Me"
            layout="responsive"
            width={730}
            height={200} // Adjusted to fit the design
          />
        </AboutMeImageWrapper>
        <AboutMeTextContainer>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeDescription>
            I am a passionate web developer with extensive experience in creating innovative solutions. I specialize in full-stack development, and I am dedicated to continuous learning and improvement.
          </AboutMeDescription>
        </AboutMeTextContainer>
      </AboutMeContainer>

    </>
  );
};

export default Home;
