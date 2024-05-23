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

const Grid = styled.div<{ videoCount: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 480px) {
    grid-template-columns: ${({ videoCount }) => (videoCount === 1 ? '1fr' : 'repeat(1, 1fr)')};
    gap: 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({ videoCount }) => (videoCount === 1 ? '1fr' : 'repeat(1, 1fr)')};
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ videoCount }) => (videoCount === 1 ? '1fr' : 'repeat(2, 1fr)')};
    gap: 20px;
  }
`;

const VideoWrapper = styled.div<{ videoCount: number }>`
  width: 100%;
  max-width: ${({ videoCount }) => (videoCount === 1 ? '800px' : 'auto')};
  margin: 0 auto;
  overflow: hidden; /* Ensure the video doesn't overflow */

  iframe {
      width: 100%;
      height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '210px')}; /* Maintain 16:9 aspect ratio */

      @media (min-width: 480px) {
        height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '280px')}; /* Maintain 16:9 aspect ratio */
      }

      @media (min-width: 1024px) {
        height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '320px')}; /* Maintain 16:9 aspect ratio */
      }
      object-fit: cover; /* Cover the container to avoid black bars */
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
