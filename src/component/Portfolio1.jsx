import React, { useEffect, useRef, useState } from "react";
import "../style/Portfolio1.scss";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/javascript.png";
import react from "../img/react.png";
import scss from "../img/sass.png";
import node from "../img/node.png";
import mysql from "../img/mysql.png";
import sharing_logo from "../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faAngleLeft,
  faAngleRight,
  faGripLines,
  faGears,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Portfolio1() {
  // const carouselRef = useRef(null);
  // const conentRef = [
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  // ];

  // const btnRef = useRef(null);
  // const [cellCount] = useState(6);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // useEffect(() => {
  //   rotateCarousel();
  // }, [selectedIndex]);

  // const rotateCarousel = () => {
  //   const angle = (selectedIndex / cellCount) * -360;
  //   carouselRef.current.style.transform = `translateZ(-700px) rotateY(${angle}deg)`;
  // };

  // const clickMain = () => {
  //   conentRef[selectedIndex].current.classList.remove("off");
  //   conentRef[selectedIndex].current.classList.add("on");
  //   btnRef.current.classList.add("off");
  // };

  // const clickClose = () => {
  //   conentRef[selectedIndex].current.classList.remove("on");
  //   conentRef[selectedIndex].current.classList.add("off");

  //   btnRef.current.classList.remove("off");
  //   btnRef.current.classList.add("on");
  // };
  // const handlePrevClick = () => {
  //   setSelectedIndex((prevIndex) => prevIndex - 1);
  // };

  // const handleNextClick = () => {
  //   setSelectedIndex((prevIndex) => prevIndex + 1);
  // };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="portfolio1">
      <div id="wrap">
        <div className="title">Portfolio</div>

        <div className="slider-container">
          <Slider {...settings}>
            <div className="controll">
              <div className="img"></div>
              <div className="txt">
                <h2>HomePage Renewal1</h2>
                {/* <ul>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faCalendar} />
                        진행 기간
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faGears} />
                        Skills
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <h2>✔️소개</h2>
                      </div>
                    </li>

                    <li>
                      <div className="content_title">
                        <h2>👩🏻‍💻담당한 기능</h2>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
            <div className="controll">
              <div className="img"></div>

              <div className="txt">
                <h2>HomePage Renewal2</h2>
                {/* <ul>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faCalendar} />
                        진행 기간
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faGears} />
                        Skills
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <h2>✔️소개</h2>
                      </div>
                    </li>

                    <li>
                      <div className="content_title">
                        <h2>👩🏻‍💻담당한 기능</h2>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
            <div className="controll">
              <div className="img"></div>
              <div className="txt">
                <h2>Musinsa Renewal</h2>
                {/* <ul>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faCalendar} />
                        진행 기간
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faGears} />
                        Skills
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <h2>✔️소개</h2>
                      </div>
                    </li>

                    <li>
                      <div className="content_title">
                        <h2>👩🏻‍💻담당한 기능</h2>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
            <div className="controll">
              <div className="img"></div>
              <div className="txt">
                <h2>Sharing</h2>
                {/* <ul>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faCalendar} />
                        진행 기간
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faGears} />
                        Skills
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <h2>✔️소개</h2>
                      </div>
                    </li>

                    <li>
                      <div className="content_title">
                        <h2>👩🏻‍💻담당한 기능</h2>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
            <div className="controll">
              <div className="img"></div>
              <div className="txt">
                <h2>Re:Used</h2>
                {/* <ul>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faCalendar} />
                        진행 기간
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faGears} />
                        Skills
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <h2>✔️소개</h2>
                      </div>
                    </li>

                    <li>
                      <div className="content_title">
                        <h2>👩🏻‍💻담당한 기능</h2>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
            <div className="controll">
              <div className="img"></div>

              <div className="txt">
                <h2>Portfolio</h2>
                {/* <ul>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faCalendar} />
                        진행 기간
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faGears} />
                        Skills
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                      </div>
                    </li>
                    <li>
                      <div className="content_title">
                        <h2>✔️소개</h2>
                      </div>
                    </li>

                    <li>
                      <div className="content_title">
                        <h2>👩🏻‍💻담당한 기능</h2>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
          </Slider>
        </div>
        {/* <div className="btn" ref={btnRef}>
          <div className="btn_left" onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="btn_right" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
