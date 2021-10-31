import React from "react";
import "./Marker.css";

// import * as S from "./Marker.styles";

const Marker = (props: any) => {
  const { color, name, id } = props;
  return (
    <div>
      <div
        key={id}
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      />
      <div className="pulse" />
    </div>
  );
};
export default Marker;
