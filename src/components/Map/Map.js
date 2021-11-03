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

const Map = () => {
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

  return (
    <>
      <S.MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: protectMeAtAllCosts }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
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
          {dummyProperties.map((property, index) => {
            return (
              <Marker
                key={index}
                color="pink"
                city={property.city}
                country={property.country}
                lat={property.latitude}
                lng={property.longitude}
                leaseTermMonths={property.lease_term_months}
                monthlyRate={property.monthly_rate}
                name={property.property}
                totalViews={property.total_views}
              />
            );
          })}
        </GoogleMapReact>
      </S.MapContainer>
    </>
  );
};

export default Map;
