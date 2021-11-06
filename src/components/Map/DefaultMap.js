import React from "react";
import GoogleMapReact from "google-map-react";

// Components
import Marker from "../Marker/Marker";

// Hooks
// import useGetAllProperties from "../../hooks/UseGetAllProperties";

// Vars
import { dummyGolfCourses } from "../../vars/GolfCourses";

const DefaultMap = ({ center, zoom }) => {
  const getMapOptions = () => {
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
          property="My Home"
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
    </>
  );
};

export default DefaultMap;
