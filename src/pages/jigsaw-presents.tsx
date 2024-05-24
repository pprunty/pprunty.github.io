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
    <Container>
      <Grid videoCount={videoCount}>
        {videos.map((videoId, index) => (
          <VideoWrapper key={index} videoCount={videoCount}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture frameborder='0'"
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

export default JigsawPresents;
