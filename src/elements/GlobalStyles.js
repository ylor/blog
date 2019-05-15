import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts/fonts.js';

export default createGlobalStyle`

  @font-face {
    font-family: "IBMPlexMono";
    src: local('IBMPlexMono400'), url('${font.IBMPlexMono400}') format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "IBMPlexMono";
    src: local('IBMPlexMono700'), url('${font.IBMPlexMono700}') format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  :root {
    --background-color: hsl(0, 0%, 7%);
    --background-color-translucent: hsla(0, 0%, 7%, 0.9);
    --background-color-alternate: hsl(0, 0%, 13%);
    --primary-color: hsl(0, 0%, 80%);
    --primary-color-light: hsla(0, 0%, 80%, 0.9);
    --primary-color-lighter: hsla(00, 0%, 80%, 0.7);
    --secondary-color-a: hsl(351, 100%, 63%);
    --font-stack: 'SFMono-Regular', 'IBMPlexMono', monospace;
    --mono-stack: 'SFMono-Regular', 'IBMPlexMono', monospace;
    --gradient-color: linear-gradient(
      45deg,
      #2948ff,
      #2f80ed,
      #56ccf2,
      #0ed2f7,
      #1cefff
    );
  
  

    @media (prefers-color-scheme: light) {
      --background-color: hsl(0, 0%, 96%);
      --background-color-translucent: hsla(0, 0%, 96%, 0.9);
      --primary-color: hsl(0, 0%, 15%);
      --primary-color-light: hsla(0, 0%, 15%, 0.9);
      --primary-color-lighter: hsla(00, 0%, 15%, 0.7);
      --secondary-color-a: hsl(351, 100%, 63%);
      }
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;

    background-color: var(--background-color);
    font-family: var(--font-stack);
    font-size: 20px;
    font-weight: 400;
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-size: 18px;
    }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;
    color: inherit;
  }

  p a {
    background-image: var(--gradient-color);
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 100% 100%;
    transition: background-size 0.25s ease;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;

 }
  p a:hover {
    color: var(--background-color);
    background-size: 100% 100%;
    transition: background-size 0.25s ease;
    font-weight: 700;
 }
  
  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }

  blockquote {
    border-left: 4px solid var(--primary-color-lighter);
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 8px;
  }

  code,
      pre {
        background: #1E1E1E;
      }

      code {
        vertical-align: text-bottom;
        font-family: var(--mono-stack);
        padding: 2px 8px;
      }

      pre {
        border-left: 0px solid #fff;
      }

      table,
      th,
      td {
        background: #1E1E1E;
        border-collapse: collapse;
        border: 1px solid var(--primary-color);
        font-family: var(--mono-stack);
        font-size: 18px;
        margin-bottom: 24px;
        margin: 0 auto;
        padding: 12px;
        text-align: center;
      }
      ;`