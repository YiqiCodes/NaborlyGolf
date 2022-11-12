import { atom } from "recoil";
const userCoordinatesAtom = atom({
  key: "userCoordinatesAtom",
  default: [43.6476629, -79.3904187],
});

export default userCoordinatesAtom;
