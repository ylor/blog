import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

//import NavBar from '../elements/NavBar';

const NavBar = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  li + li:before {
    content: '|';
    margin: 0 10px;
  }

  @media (max-width: 849px) {
    //padding: 0 var(--sides-padding-mobile);
  }
`;

function Header() {
  return (
    <NavBar>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a
            href="https://github.com/ylor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <Link to="/rss.xml">RSS</Link>
        </li>
        <li>
          <Link to="/snippets">Snippets</Link>
        </li>
      </ul>
    </NavBar>
  );
}

export default Header;
