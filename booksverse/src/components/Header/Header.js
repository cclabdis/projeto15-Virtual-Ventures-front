import React from 'react';
import { Link } from 'react-router-dom';
import {  HeaderContainer, 
          Logo, 
          ButtonsContainer, 
          SignInButton, 
          SignUpButton } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src='https://cdn.discordapp.com/attachments/1103013126749823001/1103049361241419846/virtual_ventures-removebg-preview.png' alt="Logo" />

      <ButtonsContainer>

        <Link to="/login">
          <SignInButton>Sign In</SignInButton>
        </Link>

        <Link to="/registration">
            <SignUpButton>Sign Up</SignUpButton>
        </Link>
     
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
