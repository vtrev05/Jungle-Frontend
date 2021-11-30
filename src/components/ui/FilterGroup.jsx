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
  border-top: 1px solid whitesmoke;
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
  color:#de533c;
  font-weight: 700; 
`

const FilterGroup = () => {
  const [familyName, setfamilyName] = useState("");
  const [familyChosen, setfamilyChosen] = useState(false);
  const [family, setFamily] = useState({
    properties: [],
  });

  const searchFamily = () => {
    axios
      .get(`http://localhost:4000/families/items/?livingInGroup=${familyName}`)
      .then((res) => {
        setFamily({
          properties: res.data.data.families,
        });
        console.log(res.data.data.families);
        setfamilyChosen(true);
      });
  };

  return (
    <>
      <App>
        <Container>
          <H3>¿Quieres saber qué familias de animales viven en grupo?</H3>
          <H3>Introduce true o false y descúbrelo!</H3>
          <InputText
            type="text"
            onChange={(event) => {
              setfamilyName(event.target.value);
            }}
            value={familyName.toLowerCase()}
          />
          <Button onClick={searchFamily}>Buscar</Button>
        </Container>
      </App>
      <Container>
        {!familyChosen ? (
          <H1>Elige una familia</H1>
        ) : (
          <ResDiv>
          <Ul>
          {family.properties.map(function (item, i) {
                return (
                  <MenuLi key={i}>
                    <H2> <Span>Nombre familia:</Span> {item.name}</H2>
                    <H2><Span>Hábitat ref: </Span> {item.habitat}</H2>
                    <H2> <Span>Id único familia: </Span> {item._id}</H2> 
                  </MenuLi>
                );
              })}
          </Ul>
          </ResDiv>
        )}
      </Container>
    </>
  );
};

export default FilterGroup;
