import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 140px;
  padding: 10px;
  width: 80px;
  color: #de533c;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #fdf4f4ce;
  border-radius: 8px;
  &&:hover{
    transition:.5s;
    background-color: #de533c;
    color: white;
    
  }
  ${mobile} {
    right: 30px;
    width: 80px;
    font-size: 1rem;
  }
`
const LogoutButton = () => {
    const { logout } = useAuth0();
    
    return <Button onClick={() => logout({returnTo: 'http://localhost:3000/#/'})}>Logout</Button>;
  };
  export default LogoutButton;