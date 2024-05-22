import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyles';
import { lightTheme } from '../styles/theme';
import Head from 'next/head';
import Footer from '../components/Footer';

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
          <link rel="icon" href="/images/favicon.ico" />
      </Head>
    <StyledThemeProvider theme={lightTheme}>
     <GlobalStyle theme={lightTheme}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/*<Footer/>*/}
    </StyledThemeProvider>
    </>
  );
};

export default MyApp;
