import React, { useEffect, useState } from "react";
import "../style/Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="txt">
        <p>Web Developer</p>
        <p>Portpolio</p>
      </div>
      <div className="circle"></div>
      {/* <div className="ripple1">
        <div className="inner-ripple ripple-1"></div>
        <div className="inner-ripple ripple-2"></div>
      </div> */}
    </div>
  );
}
