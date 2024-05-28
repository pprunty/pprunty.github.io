import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Title = styled.h1`
  font-size: 6vw;
  font-weight: 600;
  line-height: .9em;
  color: black;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

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

  @media(max-width: 768px) {
    font-size: 1.25rem;
    padding-bottom: 5px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 40px;

  .g-ytsubscribe {
    margin-top: 20px;
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
    height: 212px;

    @media (min-width: 720px) {
      height: 205px;
    }
  }
`;

const BackArrow = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
  text-transform: uppercase;
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #b3b3b3;
    text-decoration: none;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }

  &:hover {
    text-decoration: none;
    color: #555;
  }
`;

const videos = [
  'R0krUthYxF4?si=41F2z4CR7XtljbET',
  'sLMRR9sWo6E?si=n9SVLcdywkaYMNvf',
  'wJmg0uc3CjY?si=e1kjW7ktp2ir67CW',
];

const MemoizedVideoWrapper = memo(({ videoId, index }: { videoId: string, index: number }) => (
  <VideoWrapper key={index}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={`YouTube video player ${index + 1}`}
    ></iframe>
  </VideoWrapper>
));

const JigsawPresents: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = 'https://apis.google.com/js/platform.js';
    tag.async = true;
    tag.onload = () => {
      if (window.gapi) {
        window.gapi.load('client', () => {
          // Initialize the API
        });
      }
    };
    document.body.appendChild(tag);
  }, []);

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
      <BackArrow onClick={handleBackClick}>&larr; Back</BackArrow>
      <Title>Jigsaw Presents</Title>
      <TextContainer>
        <Subtitle>Explore my analytical YouTube channel. Providing analysis and insight into popular movies, series, books, and gaming.</Subtitle>
        <div className="g-ytsubscribe" data-channelid="UCx8iHEGQMyeInLgPQ81-EJA" data-layout="default" data-theme="dark" data-count="default"></div>
      </TextContainer>
      <Grid>
        {videos.map((videoId, index) => (
          <MemoizedVideoWrapper key={index} videoId={videoId} index={index} />
        ))}
      </Grid>
    </>
  );
};

export default JigsawPresents;