import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyles';
import { lightTheme } from '../styles/theme';
import Head from 'next/head';
import Footer from '../components/Footer';
import styled from 'styled-components';
import 'highlight.js/styles/atom-one-dark.css'; // Import the Atom One Dark theme
import 'katex/dist/katex.min.css';

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px;
  width: 100%;

  @media(min-width: 768px) {
    width: 80%; /* Increase the width to 90% on larger screens */
    max-width: 1200px; /* Optionally increase the max-width */
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    padding: 14px; /* Smaller padding for devices below iPhone 11 size */
  }

  @media (max-width: 375px) {
    padding: 8px; /* Smaller padding for devices below iPhone 11 size */
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handleLoad = () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
          console.error('Service Worker registration failed:', error);
        });

        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'NEW_SW_AVAILABLE') {
            if (confirm('A new version of this site is available. Reload to update?')) {
              window.location.reload();
            }
          }
        });
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          handleLoad();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Patrick Prunty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software, education, blog, YouTube creative media & consultations." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <StyledThemeProvider theme={lightTheme}>
        <GlobalStyle theme={lightTheme} />
        <Layout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
        <Footer />
      </StyledThemeProvider>
    </>
  );
};

export default MyApp;
