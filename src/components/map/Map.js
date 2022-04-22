import React from "react";

// Components
import DefaultMap from "./DefaultMap";

// Recoil
import { useRecoilValue } from "recoil";
import userCoordinatesAtom from "../../recoil/UserCoordinatesAtom";

// Styles
import * as S from "./Map.styles";
import "antd/dist/antd.css";

const Map = ({ courses }) => {
  const center = useRecoilValue(userCoordinatesAtom);
  const zoom = 11;

  return (
    <>
      <S.MapContainer>
        <DefaultMap center={center} courses={courses} zoom={zoom} />
      </S.MapContainer>
    </>
  );
};

export default Map;
