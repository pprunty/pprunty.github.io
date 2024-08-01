import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme'; // Import your Theme interface

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorTextPrimary};
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: auto;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
    /* Customize scrollbar for WebKit browsers (Chrome, Safari) */
    ::-webkit-scrollbar {
      width: 8px; /* Make scrollbar narrower */
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #F0F0F0;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 4px;
      border: 2px solid #F0F0F0;
    }

    /* Customize scrollbar for Firefox */
    * {
      scrollbar-width: thin; /* Make scrollbar narrower */
      scrollbar-color: #000 #F0F0F0;
    }
`;

export default GlobalStyle;
