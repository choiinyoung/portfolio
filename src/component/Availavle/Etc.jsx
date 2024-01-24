import React, { useRef, useState } from "react";
import "../../style/available.scss";
import node_img from "../../img/node.png";
import mongo_img from "../../img/mongodb.png";
import mysql_img from "../../img/mysql.png";
import npm_img from "../../img/npm.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Etc() {
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

  const Options = {
    cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  };
  const frontRef = useRef();
  const etcRef = useRef();
  const toolRef = useRef();

  const styleClick = (ref) => {
    const top = ref.current.offsetTop;
    const left = ref.current.offsetLeft;
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetWidth;

    console.log("ref", ref);
    console.log("Top:", top);
    console.log("Left:", left);
    console.log("width:", width);
    console.log("height:", height);
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
      </div>
    </div>
  );
}
