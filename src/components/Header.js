import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

import NavLinks from '../components/NavLinks';

const HeaderContainer = styled.header`
  position: relative;
  bottom: 0;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  text-align: center;
`;

const BackBar = styled.div`
  align-items: center;
  color: var(--primary-color-light);
  display: flex;
  flex-direction: row;
  font-size: 64px;
  font-weight: 400;
  height: 8vh;
  position: fixed;
  width: 100%;
  z-index: 999;

  background-color: var(--background-color-translucent);
  -webkit-backdrop-filter: blur(2.5px);
  backdrop-filter: blur(2.5px);

  @media (max-width: 900px) {
    padding: 0;
  }
`;

function BackButton() {
  return (
    <Location>
      {({ location }) => {
        if (location.pathname.includes('/snippet/')) {
          var backPath = '/snippets';
        } else {
          backPath = '/';
        }
        return (
          <BackBar>
            <Link to={backPath}>
              &larr;
            </Link>
          </BackBar>
        );
      }}
    </Location>
  );
}

function WhichHeader() {
  return (
    <Location>
      {({ location }) => {
        if (location.pathname === '/') {
          return (
            <HeaderContainer>
              <NavLinks />
            </HeaderContainer>
          );
        } else {
          return <BackButton />;
        }
      }}
    </Location>
  );
}

function Header() {
  return <WhichHeader />;
}

export default Header;
