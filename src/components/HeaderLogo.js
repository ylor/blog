import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';

const HeaderLogo = styled(FixedBar)`
  justify-content: space-evenly;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

function Header() {
  return (
    <HeaderLogo>
      <Link to="/about">
        About
      </Link>
      <a href="https://github.com/ylor" target="_blank">
        Github
      </a>
      <Link to="/snippets">
        Snippets
      </Link>
    </HeaderLogo>
  );
}

export default Header;
