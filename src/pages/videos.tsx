import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

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
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-top: 1rem;
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
//   '3JZ_D3ELwOQ',
//   'E8gmARGvPlI',
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
      <Container>
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
      </Container>
    </>
  );
};

export default Videos;
