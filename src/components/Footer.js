import React from 'react';
import styled from 'styled-components';
import NavLinks from '../components/NavLinks';

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  margin-top: 3vh;
  margin-bottom: 3vh;
  text-align: center;
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <NavLinks />
      <p>Copyright &copy; 2014-2019</p>
    </FooterContainer>
  );
}

export default Footer;
