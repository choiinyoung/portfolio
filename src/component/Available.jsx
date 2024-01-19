import React from "react";
import "../style/available.scss";
// import Front from "./Availavle/Front";

export default function Available() {
  return (
    <div className="available">
      <div className="front">
        <span>Frontend</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
      </div>
      <div className="etc">
        <span>Etc</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
      </div>
      <div className="tool">
        <span>Tool</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
      </div>
    </div>
  );
}
