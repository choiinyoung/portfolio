import React, { useEffect, useState } from "react";
import "../style/Home.scss";
import bg from "../img/pre-comp2.mp4";

export default function Home() {
  return (
    <>
      <div className="bg-video">
        <video className="content" autoPlay loop muted>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <div className="home">
        <div className="txt">
          <p>
            Web Developer
            <p className="line1"></p>
          </p>
          <p>
            Portpolio
            <p className="line2"></p>
          </p>
        </div>
        {/* <div id="container">
        <button class="face-button">
          <span class="face-container">
            <span class="eye left"></span>
            <span class="eye right"></span>
            <span class="mouth"></span>
          </span>
        </button>
      </div> */}
      </div>
    </>
  );
}
