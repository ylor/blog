import styled from 'styled-components';

export default styled.h1`
  display: block;
  font-size: 60px;
  letter-spacing: -3px;
  line-height: 1.1;
  margin: 0 auto 0 auto;
  max-width: 25em;
  padding: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;

  background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 45px;
  }
`;
