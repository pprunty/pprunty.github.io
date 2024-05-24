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
  padding-bottom: 40px;
//   border-bottom: 2px solid black;

  @media(max-width: 768px) {
    font-size: 1.25rem;
      padding-bottom: 5px;
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

const playlists = [
  'si=wtVfkUH8tj3EYFmc&amp;list=PLn6yDpEottdjri2wzWn8tFTXNLplVGqjU', // Replace with your own YouTube playlist IDs
  'si=SosBov0FywktTDz3&amp;list=PL6gx4Cwl9DGBlmzzFcLgDhKTTfNLfX1IK',
  'si=zq6SjUQ3OONc-lCb&amp;list=PL6gx4Cwl9DGAcbMi1sH6oAMk4JHw91mC_',
];

const JigsawAcademy: React.FC = () => {
  const videoCount = playlists.length;

  return (
    <>
      <Head>
        <title>Patrick Prunty - Jigsaw Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="YouTube educational series." />
        <meta property="og:type" content="video" />
        <meta property="og:image" content="/images/jigsaw-academy.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Title>Jigsaw Academy</Title>
      <Subtitle>Explore our educational YouTube series. Dive into a variety of topics and expand your knowledge with our curated playlists.</Subtitle>
      <Grid>
        {playlists.map((playlistId, index) => (
          <VideoWrapper key={index}>
            <iframe
              src={`https://www.youtube.com/embed/videoseries?${playlistId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube playlist player ${index + 1}`}
            ></iframe>
          </VideoWrapper>
        ))}
      </Grid>
    </>
  );
};

export default JigsawAcademy;
