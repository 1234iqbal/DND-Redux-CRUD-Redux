import React from "react";

export default function Knight(black) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%"
      }}
    >
      ♘
    </div>
  );
}
