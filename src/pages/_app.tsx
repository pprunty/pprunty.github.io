import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyles';
import { lightTheme } from '../styles/theme';
import Head from 'next/head';
import Footer from '../components/Footer';
import styled from 'styled-components';

const updateMetaThemeColor = (color: string) => {
  const metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", color);
  } else {
    const metaTag = document.createElement('meta');
    metaTag.name = "theme-color";
    metaTag.content = color;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
};

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 18px;
  width: 100%;

    @media(min-width: 768px) {
      width: 80%; /* Increase the width to 90% on larger screens */
      max-width: 1200px; /* Optionally increase the max-width */
      margin-left: auto;
      margin-right: auto;
    }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    updateMetaThemeColor(lightTheme.colorBackground);
  }, []);

  return (
  <>
      <Head>
          <title>Patrick Prunty</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Software products, YouTube educational & entertainment series and consultations." />
            <meta property="og:image" content="/images/favicon.ico" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          <link rel="icon" href="/images/favicon.ico" />
      </Head>
    <StyledThemeProvider theme={lightTheme}>
     <GlobalStyle theme={lightTheme}/>
      <Layout>
        <Container>
        <Component {...pageProps} />
        </Container>
      </Layout>
      <Footer/>
    </StyledThemeProvider>
    </>
  );
};

export default MyApp;
