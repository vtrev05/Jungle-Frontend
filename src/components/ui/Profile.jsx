import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Img = styled.img`
  position: fixed;
  top: 10px;
  right: 50px;
  width: 60px;
  border-radius: 8px;
  ${mobile} {
    top: 80px;
    width: 40px;
  }
`

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        isAuthenticated && (
            <div>
                <Img src={user.picture} alt={user.name} />
            </div>
        )
    )
  };
  export default Profile;
  