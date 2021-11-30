import React from "react";
import Maps from "./Maps";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const App = styled.div`
  display: flex;
  justify-content: center;
  font-family: Calibri;
  font-size: 24px;
`;

const Container = styled.div`
  background-color: #de533c;
  width: 100%;
  min-height: 270px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e7e7e6;
`;
const H1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.05rem;
  padding: 30px 0;
  font-size: 1.5rem;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
  color: whitesmoke;
`;
const Button = styled.button`
  width: 230px;
  height: 40px;
  margin: 20px;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  border: none;
  color: #e7e7e6;
  background-color: #243d7c;
  &&:hover {
    cursor: pointer;
  }
`;

const Gallery = () => {
  const BASEURL = `http://localhost:4000/habitat`;
  const [animal, setAnimal] = useState({
    properties: [],
  });
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [showMap, setShowMap] = useState("false");

  const searchHabitat = () => {
    axios.get(BASEURL).then((res) => {
      setAnimal({
        properties: res.data.data.habitats,
      });
    });
  };
  const sendProps = () => {
    let totalLat = animal.properties.map((lat) => lat.location[0]);
    let totalLong = animal.properties.map((long) => long.location[1]);
    setLat(totalLat);
    setLong(totalLong);
  };

  return (
    <>
      <App>
        <Container>
          <H1>Vamos a generar un mapa con las coordenadas de nuestros hábitats en tres sencillos pasos!</H1>
          <Button onClick={searchHabitat}>1- Obtener coordenadas</Button>
          <Button onClick={sendProps}>2- Almacenarlas</Button>
          <Button onClick={() => setShowMap("true")}>3- Mostrar mapa</Button>
        </Container>
      </App>
      <Maps visible={showMap} latitude={lat} longitude={long}></Maps>
    </>
  );
};

export default Gallery;
