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
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  iframe {
    width: 100%;
    height: 212px; // Default height

    @media (min-width: 720px) {
      height: 450px;
    }
  }
`;

const videos = [
  'C5TyJa_igy8?si=PBXXa7-TY-TrK9Ai', // Replace with your own YouTube video IDs
  'C5TyJa_igy8?si=PBXXa7-TY-TrK9Ai', // Replace with your own YouTube video IDs
  // '3JZ_D3ELwOQ',
  // 'E8gmARGvPlI',
];

const Videos: React.FC = () => {
  const videoCount = videos.length;

  return (
    <>
      <Head>
        <title>Patrick Prunty - Videos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:type" content="video" />
      </Head>
      <Title>Patrick Prunty's Videos</Title>
        <Subtitle>Explore my personal YouTube channel, where I share a variety of creative, non-educational, and non-analytical videos.</Subtitle>
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

export default Videos;
