import React from "react";
import "../../style/tool.scss";
import vscode_img from "../../img/vscode.png";
import git_img from "../../img/git.png";
import ph_img from "../../img/photoshop.png";
import ai_img from "../../img/illustor.png";
import es_pr_img from "../../img/eslint_pritter.png";
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
            <p className="txt1">
              코드 작성 도구로서
              <br />
              주로 vs code를 활용하고 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart2">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={es_pr_img} alt="es_pr_img" />
            </div>
            <p className="txt2">
              문법 규칙 및 일관된 코딩 스타일을
              <br />
              유지하고 코드의 가독성을 위해
              <br />
              사용하고 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart3">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={git_img} alt="git_img" />
            </div>
            <p className="txt3">
              버전 관리 시스템으로
              <br />
              Git을 활용하며,
              <br />
              협업 프로젝트에서
              <br />
              사용한 경험이 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart4">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={ph_img} alt="ph_img" />
            </div>
            <p className="txt4">사진 보정 및 수정,편집을 할 수 있습니다.</p>
          </li>
          <li>
            <div className="pie-chart pic-chart5">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={ai_img} alt="ai_img" />
            </div>
            <p className="txt5">로고 및 배너 디자인이 가능합니다.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
