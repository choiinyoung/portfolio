import React, { useRef, useState } from "react";
import "../../style/available.scss";
import vscode_img from "../../img/vscode.png";
import git_img from "../../img/git.png";
import ph_img from "../../img/photoshop.png";
import ai_img from "../../img/illustor.png";
import figma_img from "../../img/figma.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Tool() {
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

  return (
    <div className="available">
      <div className={"front"}>
        <span>Frontend</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
      </div>
      <div className={"etc"}>
        <span>Etc</span>
        <div className="wave1 circle1"></div>
        <div className="wave2 circle2"></div>
      </div>
      <div className={"tool"}>
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
