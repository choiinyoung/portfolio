import React from "react";
import "../../style/front.scss";
import html_img from "../../img/html.png";
import css_img from "../../img/css.png";
import sass_img from "../../img/sass.png";
import js_img from "../../img/javascript.png";
import ts_img from "../../img/typescript.png";
import react_img from "../../img/react.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Front() {
  // front
  const Data1 = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data2 = {
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data3 = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["crimson", "#ffffff00"],
        borderWidth: 0,
        borderRadius: 30,
      },
    ],
  };
  const Data4 = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["crimson", "#ffffff00"],
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
      <div className="front_img">
        <ul>
          <li>
            <div className="pie-chart pic-chart1">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={html_img} alt="html_img" />
            </div>
            <p className="txt1">
              시맨틱 구조와 Emmet문법을
              <br />
              활용하여 웹사이트 구조를
              <br />
              빠르고 명확하게
              <br />
              작성 할 수 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart2">
              <Doughnut data={Data1} options={Options}></Doughnut>
              <img src={css_img} alt="css_img" />
            </div>
            <p className="txt2">
              Bootstrap, Tailwind CSS 등
              <br />
              CSS 프레임워크를 사용하여
              <br />
              레이아웃 및 디자인을
              <br />
              빠르게 구축할 수 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart3">
              <Doughnut data={Data3} options={Options}></Doughnut>
              <img src={js_img} alt="js_img" />
            </div>
            <p className="txt3">
              DOM조작 및 이벤트처리,
              <br />
              에니메이션을 활용하여
              <br />
              웹페이지를 동적으로
              <br />
              제작 할 수있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart4">
              <Doughnut data={Data2} options={Options}></Doughnut>
              <img src={sass_img} alt="sass_img" />
            </div>
            <p className="txt4">
              변수, 믹스인, 중첩 등을 활용하여
              <br />
              코드를 더 간결하고
              <br />
              유지보수하기 쉽게
              <br />
              작성할 수 있습니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart5">
              <Doughnut data={Data4} options={Options}></Doughnut>
              <img src={ts_img} alt="ts_img" />
            </div>
            <p className="txt5">
              정적 타입 언어로서
              <br />
              JavaScript보다 안정적으로
              <br />
              개발할 수 있는 장점을 인지하고,
              <br />
              현재 TypeScript를 공부 중입니다.
            </p>
          </li>
          <li>
            <div className="pie-chart pic-chart6">
              <Doughnut data={Data3} options={Options}></Doughnut>
              <img src={react_img} alt="react_img" />
            </div>
            <p className="txt6">
              React를 사용하여
              <br />
              프로젝트를 한 경험이 있으며,
              <br />
              컴포넌트,상태관리,라우팅등
              <br />
              React의 개념을 이해하고
              <br />
              활용 할 수 있습니다
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
