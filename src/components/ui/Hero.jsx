import React from "react";
import styled from "styled-components";

const desktopStartWidth = 660;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const HomeImage = styled.img`
  position: absolute;
  top: 140px;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  ${mobile} {
    height: 60%;
  }
  ${desktop} {
    height: 50%;
  }
  z-index: -1;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  position: relative;
  top: 150px;
  ${mobile} {
    font-size: 2rem;
    position: relative;
    top: 70px;
  }
`;

const Hero = () => {
  return (
    <div>
      <HomeImage
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/46ef3f72445533.5ead053854cf3.png"
        alt="HeroBackground"
      />
      <Title>Bienvenido a la Jungla!</Title>
    </div>
  );
};

export default Hero;
