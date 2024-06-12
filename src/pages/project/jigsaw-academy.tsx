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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
  cursor: pointer;
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

const playlists = [
  'si=wtVfkUH8tj3EYFmc&amp;list=PLn6yDpEottdjri2wzWn8tFTXNLplVGqjU',
  'si=SosBov0FywktTDz3&amp;list=PL6gx4Cwl9DGBlmzzFcLgDhKTTfNLfX1IK',
  'si=zq6SjUQ3OONc-lCb&amp;list=PL6gx4Cwl9DGAcbMi1sH6oAMk4JHw91mC_',
];

const MemoizedVideoWrapper = memo(({ playlistId, index }: { playlistId: string, index: number }) => (
  <VideoWrapper key={index}>
    <iframe
      src={`https://www.youtube.com/embed/videoseries?${playlistId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={`YouTube playlist player ${index + 1}`}
    ></iframe>
  </VideoWrapper>
));

MemoizedVideoWrapper.displayName = "MemoizedVideoWrapper";

const JigsawAcademy: React.FC = () => {
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
        <title>Patrick Prunty - Jigsaw Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="YouTube educational series." />
        <meta property="og:type" content="video" />
        <meta property="og:image" content="/images/projects/jigsaw-academy-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SB4DP92HKV"></script>
      </Head>
      <BackArrow onClick={handleBackClick}>&larr; Back</BackArrow>
      <Title>Jigsaw Academy</Title>
      <TextContainer>
        <Subtitle>Explore my educational YouTube channel, featuring a diverse range of tutorials. Enhance your knowledge with curated playlists. Use the hamburger (three horizontal bars) icon at the top of the videos below to navigate through the playlists. Alternatively, click the YouTube button below to view my channel directly on YouTube.</Subtitle>
                <div className="g-ytsubscribe" data-channelid="UCiskkvzn7UMmqkwOhKCBkqw" data-layout="default" data-count="default"></div>
      </TextContainer>
      <Grid>
        {playlists.map((playlistId, index) => (
          <MemoizedVideoWrapper key={index} playlistId={playlistId} index={index} />
        ))}
      </Grid>
    </>
  );
};

JigsawAcademy.displayName = "JigsawAcademy";

export default JigsawAcademy;
