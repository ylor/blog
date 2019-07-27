import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

import NavLinks from '../components/NavLinks';

const HeaderContainer = styled.header`
  margin: 1.5vh 0 1.5vh 0;
  text-align: center;
`;

const BackBar = styled.div`
  align-items: center;
  color: var(--primary-color-light);
  display: flex;
  font-size: 3rem;
  height: 3rem;
  position: fixed;
  width: 100vw;
  z-index: 999;

  background-color: var(--background-color-translucent);
  backdrop-filter: blur(2.5px);

  a {
    padding-left: 1rem;

    @media (max-width: 768px) {
      padding-left: 8px;
    }
  }
`;

function BackButton() {
  return (
    <Location>
      {({ location }) => {
        let backPath;
        location.pathname.includes('/snippet/')
          ? (backPath = '/snippets')
          : (backPath = '/');

        return (
          <BackBar>
            <Link to={backPath}>&larr;</Link>
          </BackBar>
        );
      }}
    </Location>
  );
}

function Header() {
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

export default Header;
