import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const App = styled.div`
  font-family: Calibri;
  font-size: 24px;
`;

const Container = styled.div`
  background-color: #de533c;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e7e7e6;
`;

const ResDiv = styled.div`
  border: 2px solid #d4eafc;
  border-radius: 8px;
  background-color: #243d7c;
  width: 60%;
  min-width: 300px;
  height: auto;
  margin: 0 auto 30px;

`;
const H1 = styled.h1`
  color: whitesmoke;
  text-align: center;
  font-size: 2.1rem;
  padding: 12px;
  border-radius: 5px;
  ${mobile} {
    font-size: 1.5rem;
  }
`;

const H2 = styled.h2`
  color: whitesmoke;
  text-align: center;
  font-size: 1.5rem;
  padding: 10px 0;
  border-radius: 5px;
  ${mobile} {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  width: 180px;
  height: 40px;
  margin: 20px;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 10px;
  border: none;
  color: #e7e7e6;
  background-color: #243d7c;
  &&:hover {
    cursor: pointer;
  }
`;

const MenuLi = styled.li`
  border: 2px solid #de533c;
  color: whitesmoke;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 35px 10px;
  margin: 15px;
`;
const Ul = styled.ul`
      display: block;
    list-style-type: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`
const Span = styled.span`
  color:whitesmoke;
  text-transform: uppercase;
  font-size: 1.9rem;
  font-weight: 700; 
`
const Img = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
`
const ContentAnimals = () => {
  const BASEURL = `https://jungle-backend-v2.herokuapp.com/animal`;
  const [animalChosen, setAnimalChosen] = useState(false);
  const [animal, setAnimal] = useState({
    properties: [],
  });

  const searchAnimal = () => {
    axios.get(BASEURL).then((res) => {
      setAnimal({
        properties: res.data.data.animals,
      });
      setAnimalChosen(true);
    });
  };

  return (
    <>
      <App>
        <Container>
          <H1>¿Quieres ver una lista de todos los animales?</H1>
          <Button onClick={searchAnimal}>Mostrar animales</Button>
        </Container>

        <ResDiv>
          {!animalChosen ? (
            <H1> Los animales te están esperando! </H1>
          ) : (
            <Ul>
              {animal.properties.map(function (item, i) {
                return (
                  <MenuLi key={i}>
                    <H2> <Span>{item.name}</Span></H2>
                    <Img src={item.image} alt="animal" />
                    <H2>
                      <Link style={{ "text-decoration": "none" }} to={`/allAnimals/${item._id}`}>
                       <H2> Ver detalle {">"}</H2>
                      </Link>
                    </H2>
                  </MenuLi>
                );
              })}
            </Ul>
          )}
        </ResDiv>
      </App>
    </>
  );
};

export default ContentAnimals;
