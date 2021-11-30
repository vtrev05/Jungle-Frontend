import React from "react";
import styled from "styled-components";

const desktopStartWidth = 660;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Div = styled.div`
  position: absolute;
  top: 580px;
  ${mobile} {
    top: 670px;
  }
`;
const H2 = styled.h2`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: #243d7c;
`;
const Iframe = styled.iframe`
`
const P = styled.p`
  color: #243d7c;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.75;
  padding-bottom: 10px;
  padding-left: 10px;
  width: 98%;
  margin: 0 auto;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Span = styled.span`
  color: #243d7c;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1.75;
`;

const Main = () => {
  return (
    <Div>
      <H2>WWF España se une al canal Wild Spain</H2>
      <P>
        Dar un paseo por los videos de este canal es dar un paseo por la
        naturaleza conocida y desconocida de España. En palabras del creador del
        canal,{" "}
        <Span>
          el videógrafo y fotógrafo de naturaleza y habitual colaborador de WWF,
          Jorge Sierra: "Con Wild Spain vas a descubrir uno a uno los Espacios
          Naturales de España".
        </Span>
      </P>
      <P>
        WWF se suma como colaborador a este proyecto audiovisual{" "}
        <Span>
          al tratarse de una excelente herramienta divulgativa, en un formato
          muy actual, que acercará la fauna y flora de nuestro país a cualquier
          persona que esté interesada, tanto dentro como fuera de nuestras
          fronteras.
        </Span>
      </P>
      <Iframe
        width="100%"
        height="320"
        src="https://www.youtube.com/embed/o689nQlbX2g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>
      <P>
        <Span>
          España es el país europeo que más superficie neta aporta a Red Natura
          2000{" "}
        </Span>
        Con la ayuda de este canal, visitarás Lugares de Interés Comunitarios
        (LIC), Zonas Especiales de Conservación (ZEC) y de Zonas de Especial
        Protección para las Aves (ZEPA). Además, Wild Spain acercará al
        espectador a algunos lugares que aún siendo extraordinarios carecen, de
        momento, de protección legal.{" "}
      </P>
    </Div>
  );
};

export default Main;
