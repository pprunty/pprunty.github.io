import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;

  iframe {
    width: 100%;
    height: 212px; // Default height

    @media (min-width: 720px) {
      height: 205px;
    }
  }
`;

const videos = [
  'R0krUthYxF4?si=41F2z4CR7XtljbET', // Replace with your own YouTube video IDs
  'sLMRR9sWo6E?si=n9SVLcdywkaYMNvf',
  'wJmg0uc3CjY?si=e1kjW7ktp2ir67CW',
];

const JigsawPresents: React.FC = () => {
  const videoCount = videos.length;

  return (
    <>
      <Head>
        <title>Patrick Prunty - Jigsaw Presents</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="YouTube entertainment series." />
        <meta property="og:type" content="video" />
        <meta property="og:image" content="/images/jigsaw-presents.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Title>Jigsaw Presents</Title>
      <Subtitle>Providing analysis and insight into popular movies, series, books, and gaming.</Subtitle>
      <Grid>
        {videos.map((videoId, index) => (
          <VideoWrapper key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video player ${index + 1}`}
            ></iframe>
          </VideoWrapper>
        ))}
      </Grid>
    </>
  );
};

export default JigsawPresents;
