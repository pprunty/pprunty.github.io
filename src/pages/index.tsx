import React from 'react';
import styled from 'styled-components';
import ExportedImage from 'next-image-export-optimizer';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

const Link = styled.a`
  color: #FF70CF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const Home: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>Patrick Prunty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software, education, consultations & creative media." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta property="og:type" content="profile" />
      </Head>
      <Container>
        <ImageWrapper>
          <ExportedImage
            src="/images/me.JPG"
            alt="Patrick Prunty"
            layout="responsive"
            width={600}
            height={500}
            objectFit="cover"
            placeholder="blur"
          />
        </ImageWrapper>
        <Description>
          I'm Patrick Prunty, a full-stack web developer with a passion for <Link href="#" onClick={handleNavigation('/photography')}>photography</Link>, video creation, and education. 🧑🏼‍💻
        </Description>
        <Description>
          Dive into my <Link href="#" onClick={handleNavigation('/software')}>software services</Link>, <Link href="#" onClick={handleNavigation('/blog')}>read my blog</Link>, <Link href="#" onClick={handleNavigation('/videos')}>watch my videos</Link>, and discover more about what drives me. Whether you're here to learn, collaborate, or just explore, there's something for everyone. 🌐
        </Description>
        <Description>
          When I'm not coding, you can find me training for triathlons, practicing Brazilian Jiu Jitsu, hiking, or enjoying quality time with my loved ones. These activities fuel my creativity and keep me balanced. 🧘🏼
        </Description>
        <Description>
          Interested in a deeper conversation over coffee or have something specific in mind? Schedule a free general call with me through the <Link href="#" onClick={handleNavigation('/consultations')}>book a consultation</Link> tab. I'm always excited to connect and share ideas. ☕️
        </Description>
      </Container>
    </>
  );
};

export default Home;
