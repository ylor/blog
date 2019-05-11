import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

//import HeaderLogo from '../components/HeaderLogo';
import Footer from '../components/Footer';

import GlobalStyles from '../elements/GlobalStyles';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 var(--sides-padding-desktop);

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

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
          <Wrapper>
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
