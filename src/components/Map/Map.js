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
  // eslint-disable-next-line
  const [center, setCenter] = useState({ lat: 43.641382, lng: -79.431819 });
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(11);

  const { REACT_APP_API_KEY } = process.env;

  return (
    <>
      <S.MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: REACT_APP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            color="red"
            city="Toronto"
            country="Canada"
            lat={43.6476}
            lng={-79.39076}
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
