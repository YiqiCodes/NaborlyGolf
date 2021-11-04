import React from "react";
import GoogleMapReact from "google-map-react";

// Components
import Marker from "../Marker/Marker";

// Hooks
// import useGetAllProperties from "../../hooks/UseGetAllProperties";

const HeatMap = ({ center, zoom }) => {
  // const {allProperties, isLoading, isError} = useGetAllProperties()
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
      { lat: 43.8372, lng: -79.4526 },
      { lat: 43.9181, lng: -79.446 },
      { lat: 43.8643258, lng: -79.4935197 },
      { lat: 44.000784, lng: -79.5095372 },
      { lat: 43.9609165, lng: -79.4147022 },
    ],
    options: {
      radius: 50,
      opacity: 0.8,
    },
  };
  return (
    <>
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
    </>
  );
};

export default HeatMap;
