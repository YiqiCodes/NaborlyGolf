import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

// Components
import Marker from "../Marker/Marker";

// Hooks
// import useGetAllProperties from "../../hooks/UseGetAllProperties";

// Styles
import * as S from "./Map.styles";

// Vars
import { dummyGolfCourses } from "../../vars/GolfCourses";

const Map = () => {
  // const {allProperties, isLoading, isError} = useGetAllProperties()

  // eslint-disable-next-line
  const [center, setCenter] = useState({ lat: 43.941676, lng: -79.465868 });
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(11);

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
            name="My Home"
          />
          {dummyGolfCourses.map((golfCourse, index) => {
            return (
              <Marker
                key={index}
                color="pink"
                city={golfCourse.city}
                country={golfCourse.country}
                lat={golfCourse.latitude}
                lng={golfCourse.longitude}
                hasRange={golfCourse.range}
                holes={golfCourse.holes}
                isPublic={golfCourse.public}
                property={golfCourse.property}
                rating={golfCourse.rating}
              />
            );
          })}
        </GoogleMapReact>
      </S.MapContainer>
    </>
  );
};

export default Map;
