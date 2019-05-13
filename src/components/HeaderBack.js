import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import styled from 'styled-components';

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

function Header() {
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

export default Header;
