import React from 'react';
import './App.css';
import Navigation from './components/ui/Navigation';
import LoginButton from './components/ui/Login'
import LogoutButton from './components/ui/Logout';
import Profile from './components/ui/Profile';
import {useAuth0} from '@auth0/auth0-react'
import styled from "styled-components";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const IconImg = styled.img`
  position: fixed;
  top: 10px;
  left: 50px;
  width: 60px;
  ${mobile} {
    display: none;
  }
`
function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div>
      <IconImg src="https://cdn-icons-png.flaticon.com/512/190/190905.png" alt="jungle Icon" />
      <Navigation></Navigation>
      <div data-testid="content"></div>
      {isAuthenticated ? (<>
        <Profile></Profile>
      <LogoutButton></LogoutButton>
      </>
      ) : (
      <LoginButton></LoginButton>
      )}
    </div>
  );
}

export default App;
