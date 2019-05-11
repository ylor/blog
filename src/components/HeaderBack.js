import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

//import FixedBar from '../elements/FixedBar';

import ArrowBack from '../images/arrow-back.svg';

const Icon = styled.div`
  height: 34px;
  width: 34px;
  padding: 0;
  margin: 0;
  font-size: 64px;

  @media (max-width: 849px) {
    height: 28px;
    width: 28px;
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

background-color: var(--background-color-translucent);
-webkit-backdrop-filter: blur(2.5px);
backdrop-filter: blur(2.5px);

@media (max-width: 849px) {
  padding: 0 var(--sides-padding-mobile);
}
`

function Header() {
  return (
    <FixedBar>
      <Link to="/">
        <Icon>
        &larr;<img src={ArrowBack} alt="Back" />
        </Icon>
      </Link>
    </FixedBar>
  );
}

export default Header;
