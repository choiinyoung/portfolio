import React, { useRef, useState } from "react";
import "../style/available.scss";
// import Front from "./Availavle/Front";

export default function Available() {
  return (
    <div className="available">
      <ul>
        <li>{"<Front />"}</li>
        <li> {"<Etc />"}</li>
        <li> {"<Tool />"}</li>
      </ul>
      <div className="box"></div>
    </div>
  );
}
