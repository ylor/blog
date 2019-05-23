import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

import NavLinks from '../components/NavLinks';

import Arrow from '../../static/back.svg'

const HeaderContainer = styled.header`
  margin-bottom: 1.5vh;
  margin-top: 1.5vh;
  text-align: center;
`;

const BackBar = styled.div`
  align-items: center;
  color: var(--primary-color-light);
  display: flex;
  flex-direction: row;
  font-size: 3rem;
  height: 3rem;
  position: fixed;
  width: 100%;
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

const Icon = styled.div`
  height: 34px;
  width: 34px;
  @media (max-width: 849px) {
    height: 28px;
    width: 28px;
  }
display: flex;
fill: currenColor;`;

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
            <Link to={backPath}>            <Icon>
          <img src={Arrow} alt="Back" />
</Icon>
</Link>
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
