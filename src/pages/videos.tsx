import React from 'react';
import styled from 'styled-components';

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
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 480px) {
    grid-template-columns: ${({ videoCount }) => videoCount === 1 ? '1fr' : 'repeat(1, 1fr)'};
    gap: 5px;
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({ videoCount }) => videoCount === 1 ? '1fr' : 'repeat(2, 1fr)'};
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ videoCount }) => videoCount === 1 ? '1fr' : 'repeat(3, 1fr)'};
    gap: 20px;
  }
`;

const VideoWrapper = styled.div<{ videoCount: number }>`
  width: 100%;
  max-width: ${({ videoCount }) => videoCount === 1 ? '800px' : '600px'};
  margin: 0 auto;

  iframe {
    width: 100%;
    height: ${({ videoCount }) => videoCount === 1 ? '450px' : '212px'}; // Adjust height as needed
  }
`;

const videos = [
  'dQw4w9WgXcQ', // Replace with your own YouTube video IDs
//   '3JZ_D3ELwOQ',
//   'E8gmARGvPlI',
];

const Videos: React.FC = () => {
  const videoCount = videos.length;

  return (
    <Container>
      <Grid videoCount={videoCount}>
        {videos.map((videoId, index) => (
          <VideoWrapper key={index} videoCount={videoCount}>
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
  );
};

export default Videos;
