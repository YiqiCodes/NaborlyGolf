import React from "react";

// Components
import DefaultMap from "./DefaultMap";

// Recoil
import { useRecoilValue } from "recoil";
import userCoordinatesAtom from "../../recoil/atoms/UserCoordinatesAtom";

// Styles
import * as S from "./Map.styles";
import "antd/dist/antd.css";

const Map = () => {
  const center = useRecoilValue(userCoordinatesAtom);
  const zoom = 11;

  return (
    <>
      <S.MapContainer>
        <DefaultMap center={center} zoom={zoom} />
      </S.MapContainer>
    </>
  );
};

export default Map;
