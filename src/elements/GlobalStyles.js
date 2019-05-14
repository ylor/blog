import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts/fonts.js';

export default createGlobalStyle`
  :root {
    --background-color: hsl(0, 0%, 7%);
    --background-color-translucent: hsla(0, 0%, 7%, 0.9);
    --primary-color: hsl(0, 0%, 80%);
    --primary-color-light: hsla(0, 0%, 80%, 0.9);
    --primary-color-lighter: hsla(00, 0%, 80%, 0.7);
    --secondary-color-a: hsl(351, 100%, 63%);

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
    height: 100%;
    width: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;

  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;

    display: inline-block;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
    -webkit-tap-highlight-color: transparent;
    color: inherit;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }

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

  body {
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;

    background-color: var(--background-color);
    font-family: 'SFMono-Regular', 'IBMPlexMono', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: var(--primary-color);

    @media (max-width: 900px) {
      font-size: 17px;
    }
  }
`;
