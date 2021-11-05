import React, { useState } from "react";

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

  // eslint-disable-next-line
  const [center, setCenter] = useState({ lat: 43.941676, lng: -79.465868 });
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(11);
  // const [showHeatMap, setShowHeatMap] = useState(false);

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
