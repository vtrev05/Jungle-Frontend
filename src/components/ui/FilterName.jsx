import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const App = styled.div`
  display: flex;
  justify-content: center;
  font-family: Calibri;
  font-size: 24px;
`;

const Container = styled.div`
  background-color: #de533c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e7e7e6;
`;

const ResDiv = styled.div`
  border: 2px solid #d4eafc;
  border-radius: 8px;
  background-color: #243d7c;
  max-width: 400px;
  height: auto;
  margin: 0 auto 30px;
  padding-bottom: 30px;

`;
const H2 = styled.h2`
  color: whitesmoke;
  text-align: center;
  font-size: 2.1rem;
  padding: 5px;
  border-radius: 5px;
  ${mobile} {
    font-size: 1.9rem;
  }
`;
const H3 = styled.h3`
  color: whitesmoke;
  text-align: center;
  font-size: 2.1rem;
  background-color: #a499b8;
  padding: 5px;
  border-radius: 5px;
  ${mobile} {
    font-size: 1.9rem;
  }
`;
const InputText = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #de533c;
  font-size: 18px;
  padding-left: 10px;
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

const Img = styled.img`
  display: block;
  max-width: 310px;
  margin: 0 auto;
  border-radius: 5px;
`

const Filter = () => {
  const [animalName, setAnimalName] = useState("");
  const [animalChosen, setAnimalChosen] = useState(false);
  const [animal, setAnimal] = useState({
    name: "",
    family: "",
    isCarnivore: "",
    image: "",
  });

  const searchAnimal = () => {
    axios
      .get(`https://jungle-backend-v2.herokuapp.com/animal/items?name=${animalName}`)
      .then((res) => {
        setAnimal({
          name: animalName,
          family: res.data.data.animals[0].family,
          isCarnivore: res.data.data.animals[0].isCarnivore,
          image: res.data.data.animals[0].image,
        });
        setAnimalChosen(true);
      });
  };

  return (
    <>
      <App>
        <Container>
          <H3>Colección de animales</H3>
          <InputText
            type="text"
            onChange={(event) => {
              setAnimalName(event.target.value);
            }}
            value={animalName.toLowerCase()}
          />
          <Button onClick={searchAnimal}>Buscar animal</Button>
        </Container>
      </App>
      <Container>
        {!animalChosen ? (
          <H2> Elige un animal (Ejemplo: Marmota) </H2>
        ) : (
          <ResDiv>
            <H2>{animal.name.toUpperCase()}</H2>
            <Img src={animal.image} alt="a" />
          </ResDiv>
        )}
      </Container>
    </>
  );
};

export default Filter;
