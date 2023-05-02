import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const SignInButton = styled.button`
  background-color: #0077cc;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  background-color: #ffffff;
  color: #0077cc;
  border: 2px solid #0077cc;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const StyledBackButton = styled.button`
  background-color: #ffffff;
  color: #0077cc;
  border: 2px solid #0077cc;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
