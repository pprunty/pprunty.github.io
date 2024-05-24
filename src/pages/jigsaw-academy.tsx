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

    @media (min-width: 480px) {
      height: 450px;
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
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:image" content="/images/jigsaw-academy.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            </Head>
    <Container>
      <Grid videoCount={videoCount}>
        {playlists.map((playlistId, index) => (
          <VideoWrapper key={index} videoCount={videoCount}>
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
    </Container>
    </>
  );
};

export default JigsawAcademy;
