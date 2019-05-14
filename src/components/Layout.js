import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import GlobalStyles from '../elements/GlobalStyles';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 var(--sides-padding-desktop);

  @media (max-width: 900px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Padding = styled.body`
  padding-top: 8vh;
`;

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;

  // @media (max-width: 900px) {
  // width: 100%;
  // }
`;

function Layout({ children }) {
  function BodyPadding() {
    return (
      <Location>
        {({ location }) => {
          if (location.pathname !== '/') {
            return <Padding />;
          }
        }}
      </Location>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyles />
          <Wrapper>
            <Header />
            <BodyPadding />
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
