import React, { memo } from 'react';
import styled from 'styled-components';
import ExportedImage from 'next-image-export-optimizer';
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
  margin-bottom: 40px;
  padding-bottom: 40px;

  @media(max-width: 768px) {
    font-size: 1.25rem;
    padding-bottom: 5px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-height: auto;
  max-width: 600px;
`;

const AdWrapper = styled.div`
  margin: 20px 0;
`;

const images = [
  '/images/photography/0a94d7f5-834a-4567-86db-93f1ce8dc3ca.JPG',
  '/images/photography/2d8324a2-e783-47d8-aa1c-3891e7a8b541.JPG',
  '/images/photography/9977ee3f-d4bd-4ce6-a57c-04397898b222.JPG',
  '/images/photography/232afccf-fb3e-443d-af60-c1c67a6189d0.JPG',
  '/images/photography/60a53698-deec-4b91-94a8-5513e534c24a.JPG',
  '/images/photography/3cf5f5a9-843c-44e2-9482-45c765a84d30.JPG',
  '/images/photography/62b1ca5f-d849-41a7-a83e-42ca04b3b47c.jpg',
  '/images/photography/IMG_6023.jpg',
//   '/images/photography/me.png',
  '/images/photography/c57ad8ca-ee1e-4d3d-a9f6-9b0222e211da.JPG',
  '/images/photography/IMG_4648.jpg',
  '/images/photography/IMG_3572.jpg',
  '/images/photography/2add6d50-7a3e-4142-9707-b3d7d0e8ed7e.JPG'
];

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

const AdSenseAd = () => {
  console.log("AdSense ad is being rendered");
  return (
    <AdWrapper>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-2453030550493085"
        data-ad-slot="4052151724"></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </AdWrapper>
  );
};

const Photography: React.FC = () => {
  const router = useRouter();

  const MemoizedImageWrapper = memo(({ src, index }: { src: string, index: number }) => {
    const imagePath = isExport ? `${src}` : src;
    return (
      <ImageWrapper key={index}>
        <ExportedImage
          src={imagePath}
          alt={`Photography ${index + 1}`}
          layout="responsive"
          width={600}
          height={500}
          objectFit="cover"
          placeholder={'blur'}
        />
      </ImageWrapper>
    );
  });

  MemoizedImageWrapper.displayName = "MemoizedImageWrapper";

  return (
    <>
      <Head>
        <title>Patrick Prunty - Photography</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://patrickprunty.com/images/favicon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Patrick Prunty's Photography" />
        <meta property="og:description" content="Discover the world through my lens." />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="patrick prunty, jigsaw presents, blog, photography, photos" />
        <meta property="og:url" content={`${router.asPath}`} />
      </Head>
      <Title>Patrick Prunty&apos;s Photography</Title>
      <Subtitle>Discover the world through my lens. Here are some of my favorite shots capturing moments and stories from around the globe.</Subtitle>
      <Grid>
        {images.map((src, index) => (
          <MemoizedImageWrapper key={index} src={src} index={index} />
        ))}
      </Grid>
      {/* AdSense Ad */}
{/*      <AdSenseAd /> */}
    </>
  );
};

Photography.displayName = "Photography";

export default Photography;
