import React from "react";
import GoogleMapReact from "google-map-react";

// Styles
import * as S from "./Map.styles";

const Map = () => {
  const { REACT_APP_API_KEY } = process.env;
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  // Toronto
  const center = {
    lat: 43.65107,
    lng: -79.347015,
  };
  return (
    <S.MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>{" "}
    </S.MapContainer>
  );
};

export default Map;
