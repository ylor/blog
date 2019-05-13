import React from 'react';
import styled from 'styled-components';
import NavLinks from '../components/NavLinks';

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  margin-top: 5vh;
  margin-bottom: 3vh;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <NavLinks />
      <p>Copyright C</p>
    </FooterContainer>
  );
}

export default Footer;
