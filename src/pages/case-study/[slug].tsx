import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import ExportedImage from 'next-image-export-optimizer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #FFFFFF;
  margin-top: 20px;
  min-height: 100vh; /* Ensure it covers the full viewport height */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: black;
  text-align: center;
  max-width: 600px;
  margin-top: 0.25rem;
  font-weight: 600;

  @media (max-width: 736px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const caseStudiesData = {
  trackr: {
    title: "TrackR",
    description: "Web redesign, app design, packaging design and more for a device used to find your lost stuff.",
    imageUrl: "/images/trackr.jpg", // Update with the correct image path
  },
  // Add more case study data here
};

const CaseStudyPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const caseStudy = caseStudiesData[slug as string];

  if (!caseStudy) {
    return <p>Case Study not found</p>;
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Patrick Prunty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={caseStudy.description} />
        <meta property="og:image" content={caseStudy.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:type" content="article" />
      </Head>
      <Container>
        <Title>{caseStudy.title}</Title>
        <ImageWrapper>
          <ExportedImage
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            layout="responsive"
            width={600}
            height={500}
            objectFit="cover"
            placeholder="blur"
          />
        </ImageWrapper>
        <Description>{caseStudy.description}</Description>
      </Container>
    </>
  );
};

export default CaseStudyPage;
