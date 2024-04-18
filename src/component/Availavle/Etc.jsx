import React from "react";
import node_img from "../../img/node.png";
import mongo_img from "../../img/mongodb.png";
import mysql_img from "../../img/mysql.png";
import npm_img from "../../img/npm.png";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

// ChartJS.register(ArcElement);

export default function Etc() {
  // etc
  // const Data1 = {
  //   datasets: [
  //     {
  //       data: [60, 40],
  //       backgroundColor: ["orange", "#ffffff00"],
  //       borderWidth: 0,
  //       borderRadius: 30,
  //     },
  //   ],
  // };
  // const Data2 = {
  //   datasets: [
  //     {
  //       data: [80, 20],
  //       backgroundColor: ["orange", "#ffffff00"],
  //       borderWidth: 0,
  //       borderRadius: 30,
  //     },
  //   ],
  // };
  const data1 = [{ data1: 80 }];
  const data2 = [{ data2: 60 }];

  // const Options = {
  //   cutout: "80%",
  // };

  return (
    <>
      <div className="etc_img all">
        <ul>
          <li>
            <div className="chart ">
              {/* <Doughnut data={Data2} options={Options}></Doughnut> */}
              <div className="img">
                <img src={node_img} alt="node_img" />
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
                    fill="orange"
                    label={{ position: "right" }}
                  />
                </BarChart>
                <p className="txt">
                  Node를 사용하여 백엔드와 데이터를
                  <br />
                  주고 받는데에 활용한 적이 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              {/* <Doughnut data={Data2} options={Options}></Doughnut> */}
              <div className="img">
                <img src={npm_img} alt="npm_img" />
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
                    fill="orange"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">
                  다양한 라이브러리를 다운로드하고
                  <br />
                  프로젝트에 적용한 경험이 있습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart">
              {/* <Doughnut data={Data1} options={Options}></Doughnut> */}
              <div className="img">
                <img src={mysql_img} alt="mysql_img" />
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
                    fill="orange"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">
                  학교에서 MySQL을 배운 적이 있으며
                  <br />
                  프로젝트에서 MySQL을 다뤄보았습니다.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="chart ">
              {/* <Doughnut data={Data1} options={Options}></Doughnut> */}
              <div className="img">
                <img src={mongo_img} alt="mongo_img" className="mongo" />
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
                    fill="orange"
                    label={{ position: "right" }}
                  />
                </BarChart>

                <p className="txt">부트캠프에서 다룬적이 있습니다</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
