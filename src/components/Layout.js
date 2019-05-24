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
            href="Writer400.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="Writer700.woff2"
            as="font"
            crossOrigin="anonymous"
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
