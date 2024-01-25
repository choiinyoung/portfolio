import React from "react";
import "../../style/front.scss";
import html_img from "../../img/html.png";
import css_img from "../../img/css.png";
import sass_img from "../../img/sass.png";
import jquery_img from "../../img/jquery.png";
import js_img from "../../img/javascript.png";
import ts_img from "../../img/typescript.png";
import react_img from "../../img/react.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Front() {
  // front
  const Data1 = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data2 = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data3 = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data4 = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };

  const Options = {
    cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  };

  return (
    <>
      <div className="front_img">
        <ul>
          <li>
            <div className="pie-chart pic-chart1">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={html_img} alt="html_img" />
            </div>
            <span>
              시맨틱 html구조와 Emmet문법을 활용하여 웹사이트 구조를 빠르고
              명확하게 작성 할 수있습니다.
            </span>
          </li>
          <li>
            <div className="pie-chart pic-chart2">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={css_img} alt="css_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart3">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={sass_img} alt="sass_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart4">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={jquery_img} alt="jquery_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart5">
              <Doughnut data={Data3} options={Options}></Doughnut>
              <img src={js_img} alt="js_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart6">
              <Doughnut data={Data4} options={Options}></Doughnut>
              <img src={ts_img} alt="ts_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart7">
              <Doughnut data={Data3} options={Options}></Doughnut>
              <img src={react_img} alt="react_img" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
