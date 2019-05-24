import { createGlobalStyle } from 'styled-components';
import * as font from '../elements/Fonts';

export default createGlobalStyle`

  @font-face {
    font-family: "WriterDuo";
    src: local('Writer400'), url('${font.Writer400}') format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: "WriterDuo";
    src: local('Writer700'), url('${font.Writer700}') format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  :root {
    --font-stack: 'WriterDuo', 'SFMono-Regular', 'Menlo', 'Consolas', 'DejaVu Sans Mono', monospace;
    --mono-stack: 'SFMono-Regular', 'Menlo', 'Consolas', 'DejaVu Sans Mono', monospace;
    --background-color: hsla(0, 0%, 7%);
    --background-color-translucent: hsla(0, 0%, 7%, 0.9);
    --background-color-alternate: hsl(0, 0%, 13%);
    --primary-color: hsl(0, 0%, 80%);
    --primary-color-light: hsla(0, 0%, 80%, 0.9);
    --primary-color-lighter: hsla(00, 0%, 80%, 0.7);
    --secondary-color-a: hsl(351, 100%, 63%);
    --gradient-color: linear-gradient(
      45deg,
      hsl(239, 47%, 40%),
      hsl(231, 100%, 58%),
      hsl(214, 84%, 56%),
      hsl(195, 86%, 64%),
      hsl(190, 94%, 51%)
    );
    --side-padding: 3%;
  
  //  @media (prefers-color-scheme: light) {
  //    --background-color: hsl(0, 0%, 96%);
  //    --background-color-translucent: hsla(0, 0%, 96%, 0.9);
  //    --primary-color: hsl(0, 0%, 15%);
  //    --primary-color-light: hsla(0, 0%, 15%, 0.9);
  //    --primary-color-lighter: hsla(00, 0%, 15%, 0.7);
  //    --secondary-color-a: hsl(351, 100%, 63%);
  //    }
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

    background-color: var(--background-color);
    font-family: var(--font-stack);
    font-weight: 400;
    color: var(--primary-color);
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: 0;
  }

  p a {
    background-image: var(--gradient-color);
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 100% 100%;
    transition: background-size 0.25s ease;
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
    padding-left: 1rem;
    margin-left: 1rem;
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
  ;`;
