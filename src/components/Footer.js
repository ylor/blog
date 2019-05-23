import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const FooterContainer = styled.footer`
  margin-bottom: 3vh;
  text-align: center;
  font-size: 0.666rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <NavLinks />
      <span>Copyright &copy; 2014-2019</span>
    </FooterContainer>
  );
}

export default Footer;
