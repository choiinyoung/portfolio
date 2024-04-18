import React from "react";
import html_img from "../../img/html.png";
import css_img from "../../img/css.png";
import sass_img from "../../img/sass.png";
import js_img from "../../img/javascript.png";
import ts_img from "../../img/typescript.png";
import react_img from "../../img/react.png";
// import { Bar } from "react-chartjs-2";]

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

import { BarChart, Bar, XAxis, YAxis } from "recharts";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Front() {
  // front
  // const Data1 = {
  //   datasets: [
  //     {
  //       data: [90, 10],
  //       backgroundColor: ["crimson", "#ffffff00"],
  //       borderWidth: 0,
  //       borderRadius: 30,
  //     },
  //   ],
  // };
  // const Data2 = {
  //   datasets: [
  //     {
  //       data: [80, 20],
  //       backgroundColor: ["crimson", "#ffffff00"],
  //       borderWidth: 0,
  //       borderRadius: 30,
  //     },
  //   ],
  // };
  // const Data3 = {
  //   datasets: [
  //     {
  //       data: [70, 30],
  //       backgroundColor: ["crimson", "#ffffff00"],
  //       borderWidth: 0,
  //       borderRadius: 30,
  //     },
  //   ],
  // };
  // const Data4 = {
  //   datasets: [
  //     {
  //       data: [40, 60],
  //       backgroundColor: ["crimson", "#ffffff00"],
  //       borderWidth: 0,
  //       borderRadius: 30,
  //     },
  //   ],
  // };
  const data1 = [{ data1: 90 }];
  const data2 = [{ data2: 80 }];
  const data3 = [{ data3: 70 }];
  const data4 = [{ data4: 40 }];
  // const Options = {
  //   cutout: "80%", // 도넛 차트에서 반만 채우도록 cutout 옵션 설정
  // };

  return (
    <>
      <div className="front_img all">
        <ul>
          <li>
            <div className="chart">
              {/* <Bar data={Data1} options={Options}></Bar> */}
              <div className="img">
                <img src={html_img} alt="html_img" />
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
                    fill="crimson"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">
                  시맨틱 구조와 Emmet문법을 활용하여 웹사이트 구조를
                  <br />
                  빠르고 명확하게 작성 할 수 있습니다.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="chart">
              <div className="img">
                <img src={css_img} alt="css_img" />
              </div>
              <div className="right">
                {/* <Bar data={Data1} options={Options}></Bar> */}
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
                    fill="crimson"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">
                  Bootstrap, Tailwind CSS 등 CSS 프레임워크를 사용하여
                  <br />
                  레이아웃 및 디자인을 빠르게 구축할 수 있습니다.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="chart">
              <div className="img">
                <img src={js_img} alt="js_img" />
              </div>
              <div className="right">
                {/* <Bar data={Data3} options={Options}></Bar> */}
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
                    fill="crimson"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">
                  DOM조작 및 이벤트처리, 에니메이션을 활용하여
                  <br />
                  웹페이지를 동적으로 제작 할 수있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              <div className="img">
                <img src={sass_img} alt="sass_img" />
              </div>
              <div className="right">
                {/* <Bar data={Data2} options={Options}></Bar> */}
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
                    fill="crimson"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">
                  변수, 믹스인, 중첩 등을 활용하여
                  <br />
                  코드를 더 간결하고 유지보수하기 쉽게 작성할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              <div className="img">
                <img src={react_img} alt="react_img" />
              </div>
              <div className="right">
                {/* <Bar data={Data3} options={Options}></Bar> */}
                <BarChart
                  width={385}
                  height={60}
                  data={data3}
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
                    dataKey="data3"
                    stackId="a"
                    fill="crimson"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">
                  React를 사용하여 프로젝트를 한 경험이 있으며,
                  <br />
                  React의 개념을 이해하고 활용 할 수 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              <div className="img">
                <img src={ts_img} alt="ts_img" />
              </div>
              <div className="right">
                {/* <Bar data={Data4} options={Options}></Bar> */}
                <BarChart
                  width={385}
                  height={60}
                  data={data4}
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
                    dataKey="data4"
                    stackId="a"
                    fill="crimson"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">
                  JavaScript보다 안정적으로 개발할 수 있는 장점을 인지하고,
                  <br />
                  현재 TypeScript를 공부 중입니다.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
