import React from "react";
import "../style/available.scss";
import html_img from "../img/html.png";
import css_img from "../img/css.png";
import sass_img from "../img/sass.png";
import jquery_img from "../img/jquery.png";
import js_img from "../img/javascript.png";
import ts_img from "../img/typescript.png";
import react_img from "../img/react.png";
export default function Available() {
  return (
    <div className="available">
      <div className="front">
        <span>Frontend</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
        <div className="front_img">
          <div className="pie-chart pic-chart1">
            <span className="center">
              <img src={html_img} alt="html_img" />
            </span>
          </div>
          {/* <div className="pie-chart pic-chart2">
            <span className="center">
              <img src={css_img} alt="css_img" />
            </span>
          </div>
          <div className="pie-chart pic-chart3">
            <span className="center">
              <img src={sass_img} alt="sass_img" />
            </span>
          </div>
          <div className="pie-chart pic-chart4">
            <span className="center">
              <img src={jquery_img} alt="jquery_img" />
            </span>
          </div>
          <div className="pie-chart pic-chart5">
            <span className="center">
              <img src={js_img} alt="js_img" />
            </span>
          </div>
          <div className="pie-chart pic-chart6">
            <span className="center">
              <img src={ts_img} alt="ts_img" />
            </span>
          </div>
          <div className="pie-chart pic-chart7">
            <span className="center">
              <img src={react_img} alt="react_img" />
            </span>
          </div> */}
        </div>
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
