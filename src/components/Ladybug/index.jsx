import React from "react";
import "./style.css";

const Ladybug = ({ ladybugState }) => {
  const { posX, posY, orientation } = ladybugState;
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posY}px`,
        left: `${posX}px`,
      }}
    />
  );
};

export default Ladybug;
