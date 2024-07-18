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
      background: ${props => props?.theme?.colorBackground || lightTheme.colorBackground};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props?.theme?.colorTextPrimary || lightTheme.colorTextPrimary};
      border-radius: ${props => props?.theme?.borderRadius || '4px'};
      border: 2px solid ${props => props?.theme?.colorBackground || lightTheme.colorBackground};
    }

    /* Customize scrollbar for Firefox */
    * {
      scrollbar-width: thin; /* Make scrollbar narrower */
      scrollbar-color: ${props => props?.theme?.colorTextPrimary || lightTheme.colorTextPrimary} ${props => props?.theme?.colorBackground || lightTheme.colorBackground};
    }
`;

export default GlobalStyle;
