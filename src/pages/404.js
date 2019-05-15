import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonCentered = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Emoji = styled.div `
  display: block;
  font-size: 64px;
`;

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <Wrapper>
          <HeadingPrimary>404</HeadingPrimary>
          <TextBody style={{ textAlign: 'center' }}>
            You took a wrong turn somewhere, partner.
            <Emoji><span role="img" aria-label="yeehaw">
              🤠
            </span></Emoji>
          </TextBody>
          <Link to="/">
            <ButtonCentered>Go home</ButtonCentered>
          </Link>
        </Wrapper>
      </Layout>
    </>
  );
}

export default NotFoundPage;
