import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';

const Emoji = styled.div`
  display: block;
  font-size: 3rem;
`;

function NotFoundPage() {
  return (
    <>
      <SEO title="404" />
      <Layout>
        <HeadingPrimary>404</HeadingPrimary>
        <TextBody style={{ textAlign: 'center' }}>
          You took a wrong turn somewhere, partner.
          <Emoji>
            <span role="img" aria-label="yeehaw">
              🤠
            </span>
          </Emoji>
        </TextBody>
      </Layout>
    </>
  );
}

export default NotFoundPage;
