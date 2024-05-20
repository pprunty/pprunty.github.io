import React, { useState } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyles';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
