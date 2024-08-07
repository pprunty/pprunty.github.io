import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Newsletter from '@/components/Newsletter';

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

const NewsletterPage: React.FC = () => {

  return (
    <>
      <Head>
        <title>Patrick Prunty - Newsletter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://patrickprunty.com/favicon.png" />
        <meta property="og:title" content="Patrick Prunty's Newsletter" />
        <meta property="og:description" content={`Join over ${process.env.NEXT_PUBLIC_SUBSCRIBERS} subscribers and stay up to date with my latest blog posts!`} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="patrick prunty, jigsaw presents, blog, newsletter" />
      </Head>
        <Newsletter/>
    </>
  );
};

NewsletterPage.displayName = "NewsletterPage";

export default NewsletterPage;
