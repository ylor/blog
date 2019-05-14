import styled from 'styled-components';

export default styled.h1`
  display: block;
  font-size: 64px;
  letter-spacing: -3px;
  margin: 0 auto 0 auto;
  max-width: 25em;
  padding: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;

  background: var(--gradient-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;
