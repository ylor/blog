import styled from 'styled-components';

export default styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: var(--background-color);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  border-radius: 999px;
  border: 3px solid var(--primary-color);

  ::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: var(--gradient-color);
    transform-origin: center;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.45s ease-in-out;
  }

  :hover {
    cursor: pointer;
    color: #161616;
  }

  :hover::before {
    transform: translate(-50%, -50%) scale(15);
  }
`;
