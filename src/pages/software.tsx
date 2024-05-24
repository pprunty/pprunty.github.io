import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';


const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-top: 1rem;
`;

const Software: React.FC = () => {
  return (
  <>
                 <Head>
                     <title>Patrick Prunty - Software Products</title>
                     <meta name="viewport" content="width=device-width, initial-scale=1" />
                             <meta property="og:type" content="software" />
                     <link rel="icon" href="/images/favicon.ico" />
                 </Head>
      <Title>Welcome to My Next.js Software Page!</Title>
    </>
  );
};

export default Software;
