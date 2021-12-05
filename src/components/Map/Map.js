import React, { useEffect, useState } from "react";

// Components
import DefaultMap from "./DefaultMap";

// Hooks
import getUserLocation from "../../hooks/CustomHooks/GetUserLocation";

// Styles
import * as S from "./Map.styles";
import "antd/dist/antd.css";

const Map = () => {
  const [center, setCenter] = useState({ lat: 43.941676, lng: -79.465868 });
  const zoom = 11;

  useEffect(() => {
    getUserLocation({ setCenter });
  }, [center]);

  return (
    <>
      <S.MapContainer>
        <DefaultMap center={center} zoom={zoom} />
      </S.MapContainer>
    </>
  );
};

export default Map;
