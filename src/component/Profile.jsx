import React from "react";
import mainImg from "../img/Profile_img.jpg";
import "../style/Profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div className="all">
        <div className="title">Profile</div>
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
                <h2>Education</h2>
                <div className="line"></div>
                <ul>
                  <li>
                    <p>2023.11 ~</p>
                    <p>인천IT직업전문학원 UI&UX 양성과정</p>
                  </li>
                  <li>
                    <p>2023.01 ~ 2023.04</p>
                    <p>POSCO X 코딩온 풀스택 개발자 부트캠프 수료</p>
                  </li>
                  <li>
                    <p>2018.03 ~ 2023.02</p>
                    <p>순천향 대학교 의료 IT공학과 졸업</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="license">
              <div className="lic_all">
                <h2>License</h2>
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
                <h2>About Me</h2>
                <div className="line"></div>
                <p>
                  기술적인 역량 뿐만 아니라, 사람과의 원활한 의사소통을
                  중요시하며
                  <br></br>
                  어려움 없이 협업이 가능한 팀 플레이어로 성장하고 있습니다.
                  <br></br>
                  뿐만 아니라, 트렌드에 민감하게 반응하여 끊임없이 새로운 기술과
                  동향을 습득하고
                  <br></br>
                  적용하는 데에 큰 흥미를 느끼고 있습니다.
                </p>
              </div>
            </div>
            <div className="hash">
              <div className="hash_all">
                <ul>
                  <li>#ENTP</li>
                  <li>#열정열정열정</li>
                  <li>#긍정적</li>
                  <li>#해피</li>
                  <li>#다재다능한</li>
                  <li>#강아지</li>
                  <li>#귀여운거</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
