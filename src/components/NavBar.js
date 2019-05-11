import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

//import NavBar from '../elements/NavBar';

const NavBar = styled.div`
  position: static;
  text-align: center;
  z-index: 999;
  height: 8vh;
  width: 100%;
  padding: 0 var(--sides-padding-desktop);
  top: 0;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
   display: inline;
   margin: 1rem;
  }

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
    padding-bottom: 2rem;
`;

function Header() {
  return (
    <NavBar>
    <ul>
      <li><Link to="/about">
        About
        </Link></li>
        <li><a href="https://github.com/ylor" target="_blank" rel="noopener noreferrer">
        Github
      </a></li>
      <li><Link to="/snippets">
        Snippets
      </Link></li>
    </ul>
    </NavBar>
  );
}

export default Header;
