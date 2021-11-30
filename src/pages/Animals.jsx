import React from "react";
import FilterName from "../components/ui/FilterName";
import FilterGroup from "../components/ui/FilterGroup";
import { useAuth0 } from "@auth0/auth0-react";
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
`;
const Img = styled.img`
  display: block;
  width: 70%;
  max-width: 500px;
  margin: 0 auto;
`;

const Animals = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div data-testid="animalsFilters">
      {isAuthenticated ? (
        <>
          <FilterName></FilterName>
          <FilterGroup></FilterGroup>
        </>
      ) : (
        <>
          <H1>Para visualizar esta página debes hacer login...</H1>
          <Img
            src="https://freepngimg.com/thumb/fail_stamp/2-2-fail-stamp-png-clipart.png"
            alt="fail Img"
          />
        </>
      )}
    </div>
  );
};

export default Animals;
