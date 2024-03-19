import React from "react";
import mainImg from "../img/Profile_img.jpg";
import "../style/Profile.scss";
import { Link } from "react-scroll";

export default function Profile() {
  return (
    <div className="profile">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div className="all">
        <div className="all_controller">
          <div className="main">
            <div className="img">
              <img src={mainImg} alt="사진" />
            </div>
            <div className="txt">
              <p>최인영</p>
              {/* <p>Choi In Young</p> */}
              <p>1999. 12. 28</p>
            </div>
          </div>
          <div className="content">
            <div className="education">
              <div className="edu_all">
                <h2>[ Education ]</h2>
                <ul>
                  <li>
                    <p>2023.11 ~</p>
                    <p>인천IT직업전문학원 UI&UX 양성과정</p>
                  </li>
                  <li>
                    <p>2023.01 ~ 2023.04</p>
                    <p>POSCO X 코딩온 풀스택 부트캠프 수료</p>
                  </li>
                  <li>
                    <p>2018.03 ~ 2023.02</p>
                    <p>순천향 대학교 의료 IT공학과 졸업</p>
                  </li>
                </ul>
              </div>
              <div className="box"></div>
            </div>
            <div className="license">
              <div className="lic_all">
                <h2>[ License ]</h2>
                <div className="line"></div>
                <ul>
                  <li>
                    <p>2022.12</p>
                    <p>웹디자인기능사</p>
                  </li>
                  <li>
                    <p>2021.10</p>
                    <p>컴퓨터그래픽스운용기능사</p>
                  </li>
                  <li>
                    <p>2020.09</p>
                    <p>GTQ 포토샵 1급</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about">
              <div className="about_all">
                <h2>[ About Me ]</h2>
                <div className="line"></div>
                <p>
                  저는 호기심이 많고 도전을 즐기는 성격으로, 제가 디자인하고
                  학습한 내용이 화면에 바로 구현되는 것에 즐거워 웹 개발 분야에
                  흥미를 느끼게 되었습니다.
                  <br />
                  또한, 사람들과의 원활한 의사소통을 중요하게 생각하며 기술적
                  역량 뿐만 아니라 팀원들과 어려움 없이 협업할 수 있는 팀
                  플레이어로 성장하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="available"
          spy={true}
          smooth={true}
          offset={5}
          duration={1000}
        >
          <div class="arrows">
            <span></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
