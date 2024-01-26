import React from "react";
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
            <p className="txt1">
              Node를 사용하여
              <br />
              백엔드와 데이터를 주고 받는데에
              <br />
              활용한 적이 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart2">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={npm_img} alt="npm_img" />
            </div>

            <p className="txt2">
              다양한 라이브러리를
              <br />
              다운로드하고 프로젝트에 <br />
              적용한 경험이 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart3">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={mysql_img} alt="mysql_img" />
            </div>

            <p className="txt3">
              학교에서 MySQL을
              <br />
              배운 적이 있으며
              <br />
              프로젝트에서 MySQL을
              <br />
              다뤄보았습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart4">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={mongo_img} alt="mongo_img" />
            </div>
            <p className="txt4">
              부트캠프에서
              <br />
              다룬적이 있습니다
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
