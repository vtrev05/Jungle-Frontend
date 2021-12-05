import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Container = styled.div`
  border: 2px solid #d4eafc;
  border-radius: 8px;
  background-color: #243d7c;
  width: 60%;
  min-width: 300px;
  height: auto;
  margin: auto ;
  ${mobile} {
    width: 80%;
  }
`;
const Img = styled.img`
  display: block;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 5px;
`
const H1 = styled.h1`
  color:whitesmoke;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.9rem;
  font-weight: 700; 
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

const Span = styled.span`
  color:#de533c;
  font-size: 1.5rem;
  font-weight: 700; 
`

function AnimalDetails() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const BASEURL = `https://jungle-backend-v2.herokuapp.com/animal`;

  useEffect(() => {
    axios(BASEURL).then((res) => {
      setItems(res.data.data.animals);
      setIsLoaded(true);
    }
    );
  }, []);
  const { animalId } = useParams();

  const thisAnimal = items.find((item) => item._id === animalId);
  console.log(thisAnimal);

  if (thisAnimal === "undefined") {
    console.log("a");
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Container>
          <H1>{thisAnimal.name}</H1>
          <Img src={thisAnimal.image} alt={thisAnimal.name} />
          <H2><Span>Ref de familia:</Span> {thisAnimal.family}</H2>
          <H2>{thisAnimal.isCarnivore}</H2>
          <H2><Span>Identificador único de animal: </Span>{thisAnimal._id}</H2>
        </Container>
      </>
    );
  }
}

export default AnimalDetails;
