import styled from 'styled-components';

export default styled.p`
  display: block;
  line-height: 1.5;
  margin: 0 5% 5vh 5%;
  letter-spacing: -0.005em;

  color: var(--primary-color-light);

  @media (max-width: 900px) {
    margin: 0 0 3vh 0;
  }
`;
