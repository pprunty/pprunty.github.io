import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme'; // Import your Theme interface

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorTextPrimary};
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Arial,sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: auto;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
