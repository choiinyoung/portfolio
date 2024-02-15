import React, { useEffect, useState } from "react";
import "../style/Home.scss";
import bg from "../img/pre-comp2.mp4";

export default function Home() {
  return (
    <>
      <div className="all">
        <div className="bg-video">
          <video className="content" autoPlay loop muted>
            <source src={bg} type="video/mp4" />
          </video>
        </div>
        <div className="home">
          <div class="wrapper">
            <h1 contenteditable data-heading="Web Developer">
              Web Developer
            </h1>
            <h1 contenteditable data-heading="Portpolio" className="txt2">
              Portpolio
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
