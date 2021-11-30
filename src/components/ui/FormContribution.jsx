import React, { useState } from "react";
import styled from "styled-components";
import FormHabitat from "./FormHabitat";
import FormFamily from "./FormFamily";
import FormAnimal from "./FormAnimal";

const FormContributionContainer = styled.div`
  background-color: #243d7c;
  padding-bottom: 60px;
`;

const FormContributionH1 = styled.h1`
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

const FormContributionSelect = styled.select`
  margin: 0 auto;
  width: 100px;
  height: 30px;
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: #de533c;
  border-radius: 5px;
`;

const FormContribution = () => {
  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setOption({ value: e.target.value });
  };

  return (
    <>
      <FormContributionContainer>
        <FormContributionH1>
          Si quieres contribuir selecciona una de las opciones
        </FormContributionH1>
        <FormContributionSelect options={option} onChange={handleChange}>
          <option value="Animal" selected>
            Animal
          </option>
          <option value="Family">Family</option>
          <option value="Habitat">Hábitat</option>
        </FormContributionSelect>
      </FormContributionContainer>
      <FormHabitat state={option}></FormHabitat>
      <FormFamily state={option}></FormFamily>
      <FormAnimal state={option}></FormAnimal>
    </>
  );
};

export default FormContribution;
