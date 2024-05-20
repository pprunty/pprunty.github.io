import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
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
    grid-template-columns: ${({ videoCount }) => (videoCount === 1 ? '1fr' : 'repeat(2, 1fr)')};
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ videoCount }) => (videoCount === 1 ? '1fr' : 'repeat(3, 1fr)')};
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
      height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '250px')}; /* Maintain 16:9 aspect ratio */

      @media (min-width: 480px) {
        height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '250px')}; /* Maintain 16:9 aspect ratio */
      }

      @media (min-width: 768px) {
        height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '230px')}; /* Maintain 16:9 aspect ratio */
      }

      @media (min-width: 1024px) {
        height: ${({ videoCount }) => (videoCount === 1 ? '450px' : '215px')}; /* Maintain 16:9 aspect ratio */
      }
      object-fit: cover; /* Cover the container to avoid black bars */
  }
`;

const videos = [
  'R0krUthYxF4?si=41F2z4CR7XtljbET', // Replace with your own YouTube video IDs
  'sLMRR9sWo6E?si=n9SVLcdywkaYMNvf',
  'E8gmARGvPlI',
];

const JigsawPresents: React.FC = () => {
  const videoCount = videos.length;

  return (
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
  );
};

export default JigsawPresents;
