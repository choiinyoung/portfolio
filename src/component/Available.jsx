import React from "react";
import "../style/available.scss";
import html_img from "../img/html.png";
import css_img from "../img/css.png";
import sass_img from "../img/sass.png";
import jquery_img from "../img/jquery.png";
import js_img from "../img/javascript.png";
import ts_img from "../img/typescript.png";
import react_img from "../img/react.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Available() {
  const Data1 = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["orange", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };

  const Data2 = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["orange", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data3 = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["orange", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data4 = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["orange", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Options = {
    cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  };

  return (
    <div className="available">
      <div className="front">
        <span>Frontend</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
        <div className="front_img">
          <div className="pie-chart pic-chart1">
            <Doughnut data={Data1} options={Options}></Doughnut>
            <img src={html_img} alt="html_img" />
          </div>
          <div className="pie-chart pic-chart2">
            <Doughnut data={Data1} options={Options}></Doughnut>
            <img src={css_img} alt="css_img" />
          </div>
          <div className="pie-chart pic-chart3">
            <Doughnut data={Data2} options={Options}></Doughnut>
            <img src={sass_img} alt="sass_img" />
          </div>
          <div className="pie-chart pic-chart4">
            <Doughnut data={Data2} options={Options}></Doughnut>
            <img src={jquery_img} alt="jquery_img" />
          </div>
          <div className="pie-chart pic-chart5">
            <Doughnut data={Data3} options={Options}></Doughnut>
            <img src={js_img} alt="js_img" />
          </div>
          <div className="pie-chart pic-chart6">
            <Doughnut data={Data4} options={Options}></Doughnut>
            <img src={ts_img} alt="ts_img" />
          </div>
          <div className="pie-chart pic-chart7">
            <Doughnut data={Data3} options={Options}></Doughnut>
            <img src={react_img} alt="react_img" />
          </div>
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
