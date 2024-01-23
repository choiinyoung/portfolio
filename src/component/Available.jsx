import React, { useRef } from "react";
import "../style/available.scss";
import html_img from "../img/html.png";
import css_img from "../img/css.png";
import sass_img from "../img/sass.png";
import jquery_img from "../img/jquery.png";
import js_img from "../img/javascript.png";
import ts_img from "../img/typescript.png";
import react_img from "../img/react.png";
import node_img from "../img/node.png";
import mongo_img from "../img/mongodb.png";
import mysql_img from "../img/mysql.png";
import npm_img from "../img/npm.png";
import vscode_img from "../img/vscode.png";
import git_img from "../img/git.png";
import ph_img from "../img/photoshop.png";
import ai_img from "../img/illustor.png";
import figma_img from "../img/figma.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Available() {
  // front
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

  // etc
  const Data5 = {
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["green", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data6 = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["green", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  // tool
  const Data7 = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["rgba(0, 0, 255, 0.6)", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data8 = {
    datasets: [
      {
        data: [80, 10],
        backgroundColor: ["rgba(0, 0, 255, 0.6)", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data9 = {
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["rgba(0, 0, 255, 0.6)", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Options = {
    cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  };

  const frontRef = useRef();
  const etcRef = useRef();
  const toolRef = useRef();

  const styleClick = (ref) => {
    if (ref.current) {
      const top = ref.current.offsetTop;
      const left = ref.current.offsetLeft;

      console.log("ref", ref);
      console.log("Top:", top);
      console.log("Left:", left);
    }
  };

  return (
    <div className="available">
      <div
        className={"front"}
        ref={frontRef}
        onClick={() => styleClick(frontRef)}
      >
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
      <div className={"etc"} ref={etcRef} onClick={() => styleClick(etcRef)}>
        <span>Etc</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
        <div className="etc_img">
          <div className="pie-chart pic-chart1">
            <Doughnut data={Data6} options={Options}></Doughnut>
            <img src={node_img} alt="node_img" />
          </div>
          <div className="pie-chart pic-chart2">
            <Doughnut data={Data6} options={Options}></Doughnut>
            <img src={npm_img} alt="npm_img" />
          </div>
          <div className="pie-chart pic-chart3">
            <Doughnut data={Data5} options={Options}></Doughnut>
            <img src={mysql_img} alt="mysql_img" />
          </div>
          <div className="pie-chart pic-chart4">
            <Doughnut data={Data5} options={Options}></Doughnut>
            <img src={mongo_img} alt="mongo_img" />
          </div>
        </div>
      </div>
      <div className={"tool"} ref={toolRef} onClick={() => styleClick(toolRef)}>
        <span>Tool</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
        <div className="tool_img">
          <div className="pie-chart pic-chart1">
            <Doughnut data={Data7} options={Options}></Doughnut>
            <img src={vscode_img} alt="vscode_img" />
          </div>
          <div className="pie-chart pic-chart2">
            <Doughnut data={Data8} options={Options}></Doughnut>
            <img src={git_img} alt="git_img" />
          </div>
          <div className="pie-chart pic-chart3">
            <Doughnut data={Data7} options={Options}></Doughnut>
            <img src={ph_img} alt="ph_img" />
          </div>
          <div className="pie-chart pic-chart4">
            <Doughnut data={Data7} options={Options}></Doughnut>
            <img src={ai_img} alt="ai_img" />
          </div>
          <div className="pie-chart pic-chart5">
            <Doughnut data={Data9} options={Options}></Doughnut>
            <img src={figma_img} alt="figma_img" />
          </div>
        </div>
      </div>
    </div>
  );
}
