import React from "react";

// Antd
// import { Switch } from "antd";

// Components
// import HeatMap from "./HeatMap";
import DefaultMap from "./DefaultMap";

// Hooks
// import useGetAllProperties from "../../hooks/UseGetAllProperties";

// Styles
import * as S from "./Map.styles";
import "antd/dist/antd.css";

const Map = () => {
  // const {allProperties, isLoading, isError} = useGetAllProperties()

  const center = { lat: 43.941676, lng: -79.465868 };
  const zoom = 11;

  // const onChange = () => {
  //   setShowHeatMap((prev) => !prev);
  // };

  return (
    <>
      <S.MapContainer>
        {/* <S.ToggleContainer>
          <Switch onChange={onChange} />
        </S.ToggleContainer> */}
        {/* {showHeatMap ? ( */}
        {/* <HeatMap center={center} zoom={zoom} />
        ) : ( */}
        <DefaultMap center={center} zoom={zoom} />
        {/* )} */}
      </S.MapContainer>
    </>
  );
};

export default Map;
