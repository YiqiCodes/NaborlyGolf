import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

// Components
import Marker from "../Marker/Marker";

// Hooks
// import useGetAllProperties from "../../hooks/UseGetAllProperties";

// Styles
import * as S from "./Map.styles";

// Vars
import { dummyProperties } from "../../vars/Properties";

const HeatMap = () => {
  // const {allProperties, isLoading, isError} = useGetAllProperties()

  // eslint-disable-next-line
  const [center, setCenter] = useState({ lat: 43.6476, lng: -79.39076 });
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(14);

  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const protectMeAtAllCosts = process.env.REACT_APP_GOOGLE_API_KEY;
  const heatMapData = {
    positions: [
      { lat: 43.641382, lng: -79.431819 },
      { lat: 43.646583, lng: -79.407402 },
      { lat: 43.64667, lng: -79.40717 },
      { lat: 43.6429, lng: -79.42538 },
      { lat: 43.6429, lng: -79.42538 },
      { lat: 43.64342, lng: -79.4220985 },
      { lat: 43.652321, lng: -79.37938 },
      { lat: 49.28052, lng: -123.100731 },
      { lat: 43.645285, lng: -79.412963 },
      { lat: 43.646613, lng: -79.407357 },
    ],
    options: {
      radius: 70,
      opacity: 1,
    },
  };
  return (
    <>
      <S.MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: protectMeAtAllCosts }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
          heatmapLibrary={true}
          heatmap={heatMapData}
        >
          <Marker
            color="red"
            city="Toronto"
            country="Canada"
            lat={center.lat}
            lng={center.lng}
            leaseTermMonths="12"
            monthlyRate="2000"
            name="My Condo"
            totalViews="1"
          />
        </GoogleMapReact>
      </S.MapContainer>
    </>
  );
};

export default HeatMap;
