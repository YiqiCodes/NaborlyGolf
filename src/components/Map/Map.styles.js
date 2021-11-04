import styled from "styled-components";

export const MapContainer = styled.div`
  display: flex;
  width: 85%;
  height: 100vh;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const ToggleContainer = styled.div`
  position: absolute;
  right: 0;
  margin: 1rem;
  z-index: 1;
`;
