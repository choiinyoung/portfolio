import React, { useRef, useState } from "react";
import "../../style/etc.scss";
import node_img from "../../img/node.png";
import mongo_img from "../../img/mongodb.png";
import mysql_img from "../../img/mysql.png";
import npm_img from "../../img/npm.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Etc() {
  // etc
  const Data1 = {
    datasets: [
      {
        data: [60, 40],
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

  const Options = {
    cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  };

  return (
    <>
      <div className="etc_img">
        <ul>
          <li>
            <div className="pie-chart pic-chart1">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={node_img} alt="node_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart2">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={npm_img} alt="npm_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart3">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={mysql_img} alt="mysql_img" />
            </div>
          </li>
          <li>
            {" "}
            <div className="pie-chart pic-chart4">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={mongo_img} alt="mongo_img" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
