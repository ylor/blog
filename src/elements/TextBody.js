import styled from 'styled-components';

export default styled.p`
  display: block;
  line-height: 1.5;
  letter-spacing: -0.005em;

  color: var(--primary-color-light);

  @media (max-width: 768px) {
    margin: 0 0 3vh 0;
  }
`;
