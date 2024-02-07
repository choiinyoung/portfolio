import React, { useEffect, useState } from "react";
import "../style/Home.scss";

export default function Home() {
  return (
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
  );
}
