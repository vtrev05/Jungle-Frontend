import React from 'react'
import Gallery from '../components/ui/Gallery'
import Maps from '../components/ui/Maps'
import {useAuth0} from '@auth0/auth0-react'
import styled from "styled-components";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const H1 = styled.h1`
    color: #243d7c;
    font-size: 4rem;
    display: block;
    text-align: center;
    margin: 10vh auto 30px;
    ${mobile} {
    font-size: 2rem;
  }
`
const Img = styled.img`
    display: block;
    width: 70%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 8px;
`
const Habitat = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <div data-testid="habitatrender">
            {isAuthenticated ? (
            <>
            <Gallery></Gallery>
            <Maps></Maps>
            </>
            ) : (
                <>
                <H1>Esta página también es secreta, hazme caso y haz login!</H1>
                <Img src="https://i.pinimg.com/originals/96/8b/67/968b67b17934ad7dc3d401a222248f85.gif" alt="" />
                </>
                )}
            
        </div>
    )
}

export default Habitat

