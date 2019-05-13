import styled from 'styled-components';

import TextBody from './TextBody';

export default styled(TextBody)`
  font-size: 16px;
  color: var(--primary-color-lighter);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
