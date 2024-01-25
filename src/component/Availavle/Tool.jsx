import React from "react";
import "../../style/tool.scss";
import vscode_img from "../../img/vscode.png";
import git_img from "../../img/git.png";
import ph_img from "../../img/photoshop.png";
import ai_img from "../../img/illustor.png";
import figma_img from "../../img/figma.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Tool() {
  const Data1 = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["green", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data2 = {
    datasets: [
      {
        data: [80, 10],
        backgroundColor: ["green", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data3 = {
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["green", "#ffffff00"],
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
      <div className="tool_img">
        <ul>
          <li>
            <div className="pie-chart pic-chart1">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={vscode_img} alt="vscode_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart2">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={git_img} alt="git_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart3">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={ph_img} alt="ph_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart4">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={ai_img} alt="ai_img" />
            </div>
          </li>
          <li>
            <div className="pie-chart pic-chart5">
              <Doughnut data={Data3} options={Options}></Doughnut>
              <img src={figma_img} alt="figma_img" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
