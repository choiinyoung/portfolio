import React from "react";
import vscode_img from "../../img/vscode.png";
import git_img from "../../img/git.png";
import ph_img from "../../img/photoshop.png";
import ai_img from "../../img/illustor.png";
import es_pr_img from "../../img/eslint_pritter.png";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default function Tool() {
  const data1 = [{ data1: 90 }];
  const data2 = [{ data2: 80 }];
  // const Options = {
  //   cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  // };

  return (
    <>
      <div className="tool_img all">
        <ul>
          <li>
            <div className="chart ">
              {/* <Doughnut data={Data1} options={Options}></Doughnut> */}
              <div className="img">
                <img src={vscode_img} alt="vscode_img" />
              </div>
              <div className="right">
                <BarChart
                  width={385}
                  height={60}
                  data={data1}
                  layout="vertical"
                >
                  <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="currency"
                    axisLine={false}
                    dx={-5}
                    tickLine={false}
                    style={{ fill: "black" }}
                  />
                  <Bar
                    dataKey="data1"
                    stackId="a"
                    fill="green"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">
                  코드 작성 도구로서
                  <br />
                  주로 vs code를 활용하고 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              {/* <Doughnut data={Data1} options={Options}></Doughnut> */}
              <div className="img">
                <img src={es_pr_img} alt="es_pr_img" />
              </div>
              <div className="right">
                <BarChart
                  width={385}
                  height={60}
                  data={data1}
                  layout="vertical"
                >
                  <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="currency"
                    axisLine={false}
                    dx={-5}
                    tickLine={false}
                    style={{ fill: "black" }}
                  />
                  <Bar
                    dataKey="data1"
                    stackId="a"
                    fill="green"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">
                  문법 규칙 및 일관된 코딩 스타일을
                  <br />
                  유지하고 코드의 가독성을 위해 사용하고 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              {/* <Doughnut data={Data2} options={Options}></Doughnut> */}
              <div className="img">
                <img src={git_img} alt="git_img" />
              </div>
              <div className="right">
                <BarChart
                  width={385}
                  height={60}
                  data={data2}
                  layout="vertical"
                >
                  <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="currency"
                    axisLine={false}
                    dx={-5}
                    tickLine={false}
                    style={{ fill: "black" }}
                  />
                  <Bar
                    dataKey="data2"
                    stackId="a"
                    fill="green"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">
                  버전 관리 시스템으로 Git을 활용하며,
                  <br />
                  협업 프로젝트에서 사용한 경험이 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              {/* <Doughnut data={Data1} options={Options}></Doughnut> */}
              <div className="img">
                <img src={ph_img} alt="ph_img" />
              </div>
              <div className="right">
                <BarChart
                  width={385}
                  height={60}
                  data={data1}
                  layout="vertical"
                >
                  <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="currency"
                    axisLine={false}
                    dx={-5}
                    tickLine={false}
                    style={{ fill: "black" }}
                  />
                  <Bar
                    dataKey="data1"
                    stackId="a"
                    fill="green"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">사진 보정 및 수정,편집을 할 수 있습니다.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart ">
              {/* <Doughnut data={Data1} options={Options}></Doughnut> */}
              <div className="img">
                <img src={ai_img} alt="ai_img" />
              </div>
              <div className="right">
                <BarChart
                  width={385}
                  height={60}
                  data={data1}
                  layout="vertical"
                >
                  <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="currency"
                    axisLine={false}
                    dx={-5}
                    tickLine={false}
                    style={{ fill: "black" }}
                  />
                  <Bar
                    dataKey="data1"
                    stackId="a"
                    fill="green"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">로고 및 배너 디자인이 가능합니다.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
