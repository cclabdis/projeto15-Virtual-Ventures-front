import React from 'react';
import { Link } from 'react-router-dom';
import {  HeaderContainer, 
          Logo, 
          ButtonsContainer, 
          SignInButton, 
          SignUpButton, 
          StyledBackButton } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
          <StyledBackButton>Home</StyledBackButton>
      </Link> 

      <Link to="/">
      <Logo src='https://cdn.discordapp.com/attachments/1103013126749823001/1103071449855565915/logo.png' alt="Logo" />
      </Link> 
      
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
