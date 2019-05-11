import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

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

function Footer() {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
}

export default Footer;
