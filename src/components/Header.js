import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

import NavBar from '../components/NavBar';

const HeaderContainer = styled.footer`
  position: relative;
  bottom: 0;
  margin-top: 5vh;
  margin-bottom: 3vh;
  text-align: center;

  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

const FixedBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  left: auto;
  right: auto;
  z-index: 999;
  height: 8vh;
  width: 100%;
  padding-top: 0 var(--sides-padding-desktop);
  top: 0px;
  font-size: 64px;
  color: var(--primary-color-lighter);

  background-color: var(--background-color-translucent);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

function BackButton() {
  return (
    <Location>
      {({ location }) => {
        if (location.pathname.indexOf('/snippet/') > -1) {
          var backPath = '/snippets';
        } else {
          backPath = '/';
        }
        return (
          <FixedBar>
            <Link to={backPath}>
              <p>&larr;</p>
            </Link>
          </FixedBar>
        );
      }}
    </Location>
  );
}

function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <NavBar />
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
