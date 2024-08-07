import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

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
//   margin-bottom: 20px;
//   padding-bottom: 40px;

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
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  iframe {
    width: 100%;
    height: 212px;

    @media (min-width: 720px) {
      height: 450px;
    }
  }
`;

const videos = [
  'C5TyJa_igy8?si=PBXXa7-TY-TrK9Ai',
  'C5TyJa_igy8?si=PBXXa7-TY-TrK9Ai',
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

MemoizedVideoWrapper.displayName = "MemoizedVideoWrapper";


const Videos: React.FC = () => {
  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = "https://apis.google.com/js/platform.js";
    tag.async = true;
    tag.onload = () => {
      window.gapi.load('client', () => {
        // Initialize the API
      });
    };
    document.body.appendChild(tag);
  }, []);

  return (
    <>
      <Head>
        <title>Patrick Prunty - Videos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://patrickprunty.comfavicon.png" />
        <meta property="og:type" content="video" />
        <meta property="og:title" content="Patrick Prunty's Videos" />
        <meta property="og:description" content="Explore my personal YouTube channel, where I share a variety of creative videos." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LSBKKYLNC4"></script>
      </Head>
      <Title>Patrick Prunty&apos;s Videos</Title>
      <TextContainer>
        <Subtitle>Explore my personal YouTube channel, where I share a variety of creative videos.</Subtitle>
        <div className="g-ytsubscribe" data-channelid="UCYj_hDCY1XV9_kFwGSjgqxA" data-layout="default" data-count="default"></div>
      </TextContainer>
      <Grid>
        {videos.map((videoId, index) => (
          <MemoizedVideoWrapper key={index} videoId={videoId} index={index} />
        ))}
      </Grid>
    </>
  );
};

Videos.displayName = "Videos";


export default Videos;
