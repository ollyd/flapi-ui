import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/flickr-logo.png';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/"><Img src={logo} alt="flickr-logo" /></Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.header`
  ${({ theme }) => `
    padding: 0.8rem 15rem;
    background-color: ${theme.palette.primary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
    height: 8rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.text.color.contrast};

    @media (max-width: 960px) {
      padding: 0.8rem 5rem;
    }

    @media (max-width: 600px) {
      padding: 0.8rem;
    }
  `}
`;

const Img = styled.img`
  height: 6rem;
  display: block;
`;
