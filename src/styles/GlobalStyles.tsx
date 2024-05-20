import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme'; // Import your Theme interface

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body {
    background-color: ${({ theme }) => theme.colorBackground};
    background: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorTextPrimary};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
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
