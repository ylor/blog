import { createGlobalStyle } from 'styled-components';

import * as font from '../fonts/fonts.js';

export default createGlobalStyle`

  @font-face {
    font-family: "WriterDuo";
    src: local('Writer400'), url('${font.Writer400}') format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "WriterDuo";
    src: local('Writer700'), url('${font.Writer700}') format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  :root {
    --font-stack: 'WriterDuo', 'SFMono-Regular', Menlo, Consolas, monospace;
    --mono-stack: 'SFMono-Regular', Menlo, Consolas, monospace;
    --background-color: hsl(0, 0%, 7%);
    --background-color-translucent: hsla(0, 0%, 7%, 0.9);
    --background-color-alternate: hsl(0, 0%, 13%);
    --primary-color: hsl(0, 0%, 80%);
    --primary-color-light: hsla(0, 0%, 80%, 0.9);
    --primary-color-lighter: hsla(00, 0%, 80%, 0.7);
    --secondary-color-a: hsl(351, 100%, 63%);
    --gradient-color: linear-gradient(
      45deg,
      #363795,
      #2948ff,
      #2f80ed,
      #56ccf2,
      #0ed2f7
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

  html {
    font-size: 24px;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }

  }

  body {
    margin: 0;
    --sides-padding-desktop: 3%;
    --sides-padding-mobile: 5%;

    background-color: var(--background-color);
    font-family: var(--font-stack);
    font-weight: 400;
    color: var(--primary-color);
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
    font-size: .666rem;
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
    margin-bottom: 1rem;
    margin: 0 auto;
    padding: .5rem;
    text-align: center;
  }

  button {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: var(--background-color);
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    border-radius: 999px;
    border: 3px solid var(--primary-color);
  }
  
  button::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: var(--gradient-color);
    transform-origin: center;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.45s ease-in-out;
  }
  
  button:hover {
    cursor: pointer;
    color: #161616;
  }
  
  button:hover::before {
    transform: translate(-50%, -50%) scale(15);
  }
  ;`