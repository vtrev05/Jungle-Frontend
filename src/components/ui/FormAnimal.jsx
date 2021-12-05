import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

const desktopStartWidth = 576;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props) =>
    props.state === "Family" || props.state === "Habitat" ? "none" : "block"};
`;
const ContactTitle = styled.p`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  color: #243d7c;
`;
const Label = styled.label`
  padding: 10px 0;
  display: ${(props) => (props.validations === "true" ? "block" : "inline")};
  font-weight: 700;
  font-size: 1.1rem;
  color: #de533c;
  ${desktop} {
    width: 60vw;
  }
`;

const FormContain = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${desktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FormContributionH1 = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 20px 0;
  margin: 0;
  color: #de533c;
`;

const ButtonForm = styled.button`
  border: none;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  color: white;
  background-color: #de533c;
  border-radius: 5px;
  margin: 25px auto 30px;
  width: 150px;
  align-self: center;
  padding: 15px;
  cursor: pointer;
  border: 3px solid #de533c;
  &&:hover {
    transition: 0.5s;
    background-color: white;
    color: #e10600;
  }
  ${desktop} {
    width: 30vw;
  }
`;

const InputContain = styled.input`
  margin-bottom: 10px;
  max-width: 300px;
  align-self: center;
  color: #243d7c;
  font-size: 1rem;
  border-radius: 5px;
`;

const FormAnimal = (state) => {
  const [messageSent, setMessageSent] = useState("");
  const BASEURL = `https://jungle-backend-v2.herokuapp.com/collaboration`;
  let objectExample = {
    animals: {},
    families: {},
    habitats: {},
  };

  const formikAnimals = useFormik({
    initialValues: {
      animals: {
        name: "",
        isCarnivore: "",
        family: [""],
      },
    },
    onSubmit: (formikAnimals) => {
      setMessageSent(<ContactTitle>Mensaje enviado</ContactTitle>);
      objectExample.animals = formikAnimals.animals;
      handleSubmit(objectExample);
    },
  });

  const handleSubmit = async (e) => {
    console.log(e);
    const response = await axios.post(BASEURL, objectExample);
    console.log(response);
  };

  return (
    <FormContainer state={state.state.value}>
      <FormContributionH1>Bienvenido a la página de ayuda!</FormContributionH1>
      <ContactTitle>
        Si quieres contribuir añadiendo información de nuevos animales, eres
        bienvenido. A continuación te dejamos un sencillo formulario que podrás
        rellenar con los datos de aquellos animales que creas que deben estar en
        nuestra base de datos!
      </ContactTitle>
      <FormContain onSubmit={formikAnimals.handleSubmit}>
        <Label htmlFor="animals.name">Nombre</Label>
        <InputContain
          onChange={formikAnimals.handleChange}
          value={formikAnimals.values.animals.name}
          id="animals.name"
          name="animals.name"
        />
        <Label htmlFor="animals.isCarnivore">
          ¿Es carnívoro? Escribe yes or no
        </Label>
        <InputContain
          onChange={formikAnimals.handleChange}
          value={formikAnimals.values.animals.isCarnivore}
          id="animals.isCarnivore"
          name="animals.isCarnivore"
        />
        <Label htmlFor="animals.family">Familia</Label>
        <InputContain
          onChange={formikAnimals.handleChange}
          value={formikAnimals.values.animals.family}
          id="animals.family"
          name="animals.family"
        />
        <ButtonForm type="submit">Enviar</ButtonForm>
        <ContactTitle>{messageSent}</ContactTitle>
      </FormContain>
    </FormContainer>
  );
};

export default FormAnimal;
