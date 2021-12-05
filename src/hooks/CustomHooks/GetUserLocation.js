// Hook that gets user location and resets the center of map
const getUserLocation = ({ setCenter }) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    let crd = pos.coords;
    setCenter({ lat: crd.latitude, lng: crd.longitude });
  };

  const error = (err) => {
    console.warn(
      `Edward Snowden has entered the chat: (${err.code}): ${err.message}`
    );
  };

  return navigator.geolocation.getCurrentPosition(success, error, options);
};

export default getUserLocation;
