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
    --primary-color: hsl(0, 0%, 80%);
    --primary-color-light: hsla(0, 0%, 80%, 0.9);
    --primary-color-lighter: hsla(00, 0%, 80%, 0.7);
    --secondary-color-a: hsl(351, 100%, 63%);
    --gradient-color: -webkit-linear-gradient(
      -45deg,
      hsl(189, 100%, 50%),
      hsl(174, 79%, 49%),
      hsl(188, 81%, 59%),
      hsl(213, 62%, 61%),
      hsl(240, 100%, 70%)
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
    font-family: 'SFMono-Regular', 'IBMPlexMono', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-size: 18px;
    }

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
    position: relative;
    font-weight: 700;
    z-index: 1;
  }
  
  p a::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 1px;
    bottom: 1px;
    left: 0px;
    right: 0px;
    background: var(--gradient-color);
    transform-origin: bottom center;
    transform: scaleY(0.1);
    transition: all .25s ease-in-out;
  }

  p a:hover {
    color: var(--background-color);
    transition: all .25s ease-in-out;
  }
  
  p a:hover::before {
    transform: scaleY(1);
    background: var(--gradient-color);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }
`;
