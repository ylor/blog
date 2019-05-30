import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

import Header from './Header';
import Footer from './Footer';

import GlobalStyles from '../elements/GlobalStyles';

const Padding = styled.div`
  padding-top: 3rem;
`;

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 var(--side-padding);
`;

function HeaderPadding() {
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

function Layout({ children }) {
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
          <Helmet>
          <link
            rel="preload"
            href="static/Writer400-b18bea3a339adb7910a7b24ee5e97488.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <link
            rel="preload"
            href="static/Writer700-1004d983e961e4b8a45f723b33305d6e.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          </Helmet>
          <GlobalStyles />
          <Header />
          <HeaderPadding />
          <Content>{children}</Content>
          <Footer />
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
