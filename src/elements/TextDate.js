import styled from 'styled-components';

import TextBody from './TextBody';

export default styled(TextBody)`
  font-size: 18px;
  margin-top: -18px;
  color: var(--primary-color-lighter);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: -16px;
  }
`;
