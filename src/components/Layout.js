import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

import GlobalStyles from '../elements/GlobalStyles';

const Wrapper = styled.div`
`;

const Padding = styled.div`
  padding-top: 8vh;
`;

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 var(--sides-padding)
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
