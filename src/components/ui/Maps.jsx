import React from "react";
import GoogleMaps from "simple-react-google-maps";
import styled from "styled-components";

const FormContainer = styled.div`
  display: ${(props) => (props.visible === "true" ? "block" : "none")};
`;

const Maps = ({ visible, latitude, longitude }) => {
  const latitudes = latitude;
  console.log(latitudes);
  console.log(longitude);

  return (
    <FormContainer visible={visible}>
      <GoogleMaps
        apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
        style={{ height: "800px", width: "100%" }}
        zoom={3}
        center={{
          lat: -1.0,
          lng: 41.0,
        }}
        markers={[
          { lat: -1.0, lng: 41.0 },
          { lat: -69.25, lng: 24.5 },
          { lat: -1.831239, lng: -78.183406 },
          { lat: 53.87413, lng: -166.53408 },
          { lat: 2.25, lng: 42.5 },
          { lat: 45.557, lng: -3.1632 },
        ]}
      />
    </FormContainer>
  );
};
export default Maps;
