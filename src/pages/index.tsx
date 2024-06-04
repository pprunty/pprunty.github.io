import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import CaseStudy from '../components/CaseStudy'; // Adjust the import path as necessary
import ExportedImage from 'next-image-export-optimizer';

// Define keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

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
  animation: ${fadeIn} 1.2s ease-in-out forwards;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding-bottom: 5px;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 2px solid black;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    padding-left: 20px;
    margin-bottom: 0;
  }
`;

const AboutMeTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const AboutMeDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0px;
`;

const AboutMeLabel = styled.div`
  font-size: 0.875rem;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const AboutMeImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  margin-left: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
    width: 44%; /* Adjust the width as needed for larger screens */
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

interface CaseStudyProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CaseStudyComponent: React.FC<CaseStudyProps> = memo(({ title, description, imageUrl, link, index }) => (
  <CaseStudy
    key={index}
    index={index}
    title={title}
    description={description}
    imageUrl={imageUrl}
    link={link}
  />
));

CaseStudyComponent.displayName = "CaseStudyComponentInner";

const Home: React.FC = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "pokR",
      description: "An open-sourced reinforcement and deep-learning model designed for applications of Texas Hold'em Poker.",
      imageUrl: "/images/poker.webp",
      link: "https://github.com/pprunty/pokR",
      index: 0,
    },
    {
      title: "thelastmanstanding.io",
      description: "A platform to facilitate sweepstake and last-man-standing competitions among friend groups and sports fans, enabling digital payments, automated email notifications, and custom wagers. The product currently covers major football events such as the FIFA World Cup, European Championship, and English Premier League. With a growing community, future expansion plans aim to incorporate more international Football tournaments, as well as international Rugby and Cricket competitions.",
      imageUrl: "/images/IMG_5948.JPG",
      link: "https://thelastmanstanding.io",
      index: 1,
    },
    {
      title: "Jigsaw Presents",
      description: "An analytical YouTube channel, where you will find in-depth analysis and insights into trending movies, series, books, and games. Curated playlists include 'Mastering FastAPI: From Basics to Advanced,' 'Laws of UI/UX Design,' and 'How to Brew Stout Beer.'",
      imageUrl: "/images/jigsaw-presents-logo.png",
      link: "project/jigsaw-presents",
      index: 2,
    },
    {
      title: "Jigsaw Academy",
      description: "An educational YouTube channel, providing free, high-quality educational tutorials to those who need it most. Curated playlists include 'Mastering FastAPI: From Basics to Advanced', 'Laws of UI/UX Design' and 'How to Brew Stout Beer'.",
      imageUrl: "/images/jigsaw-academy-logo.png",
      link: "project/jigsaw-academy",
      index: 3,
    },
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
        I am a full-stack web developer with a passion for software, education, and creative media. Explore my projects below to learn more about my work. If you wish to connect, I offer one-on-one consultations to discuss projects, ideas, or any questions you have.
      </Subtitle>
      {caseStudies.map((caseStudy) => (
        <CaseStudyComponent
          key={caseStudy.index}
          index={caseStudy.index}
          title={caseStudy.title}
          description={caseStudy.description}
          imageUrl={caseStudy.imageUrl}
          link={caseStudy.link}
        />
      ))}
      <AboutMeContainer>
        <AboutMeImageWrapper>
          <AboutMeLabel>● About</AboutMeLabel>
          <ExportedImage src="/images/me.WEBP" alt="About Me" layout="responsive" width={730} height={200} />
        </AboutMeImageWrapper>
        <AboutMeTextContainer>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeDescription>
            When I&lsquo;m not coding or working on side-projects, you&lsquo;ll find me training triathlon, hiking or enjoying quality time with loved ones. I&lsquo;m always open to connecting—feel free to reach out to me on my social media platforms below. 🧘🏼
          </AboutMeDescription>
        </AboutMeTextContainer>
      </AboutMeContainer>
    </>
  );
};

Home.displayName = "Home";

export default Home;
