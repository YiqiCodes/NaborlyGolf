import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Recoil
import { useRecoilValue } from "recoil";
import userCoordinatesAtom from "../../recoil/UserCoordinatesAtom";

const LeafletMap = ({ courses }) => {
  const center = useRecoilValue(userCoordinatesAtom);

  return (
    <>
      <MapContainer center={center} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Home sweet home</Popup>
        </Marker>
        {courses.map((golfCourse, index) => {
          return (
            <Marker
              position={[golfCourse.latitude, golfCourse.longitude]}
              key={index}
            >
              <Popup>
                <p>Course: {golfCourse.property}</p>
                <p>City: {golfCourse.city}</p>
                <p>Country: {golfCourse.country}</p>
                <p>Range: {golfCourse.range ? "Yes" : "No"}</p>
                <p>Holes: {golfCourse.holes}</p>
                <p>Public: {golfCourse.public ? "Yes" : "No"}</p>
                <p>Rating: {golfCourse.rating}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default LeafletMap;
