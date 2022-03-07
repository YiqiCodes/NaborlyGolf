import { atom } from "recoil";
const userCoordinatesAtom = atom({
  key: "userCoordinatesAtom",
  default: { lat: null, lng: null },
});

export default userCoordinatesAtom;
