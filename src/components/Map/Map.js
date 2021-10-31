import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

// Components
import Marker from "../Marker/Marker";

// Hooks
// import useGetAllProperties from "../../hooks/UseGetAllProperties";

// Styles
import * as S from "./Map.styles";

// Vars
// import dummyProperties from "../../vars/Properties";

const Map = () => {
  // eslint-disable-next-line
  const [center, setCenter] = useState({ lat: 43.641382, lng: -79.431819 });
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(11);
  const { REACT_APP_API_KEY } = process.env;
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <S.MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <Marker lat={43.650132} lng={-79.379328} color="pink" name="Home" />
      </GoogleMapReact>{" "}
    </S.MapContainer>
  );
};

export default Map;
