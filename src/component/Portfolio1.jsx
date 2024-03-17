import React, { useEffect, useRef, useState } from "react";
import "../style/Portfolio1.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faGears,
  faPeopleGroup,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import musinsa from "../img/musinsa.mp4";
import sharing from "../img/sharing.mp4";
import re_used from "../img/re_used.mp4";
import { Link } from "react-scroll";

export default function Portfolio1() {
  const carouselRef = useRef(null);
  const innerRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [cellCount] = useState(5);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const rotateCarousel = () => {
      const angle = (selectedIndex / cellCount) * -360;
      carouselRef.current.style.transform = `translateZ(-700px) rotateY(${angle}deg)`;

      // 모든 요소의 클래스를 scale_off로 초기화
      innerRefs.forEach((ref) => {
        ref.current.classList.remove("scale_on");
        ref.current.classList.add("scale_off");
      });

      // 선택된 요소에 scale_on 클래스 추가
      innerRefs[selectedIndex].current.classList.remove("scale_off");
      innerRefs[selectedIndex].current.classList.add("scale_on");
    };

    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        handleNextClick();
      }, 5000); // 5초마다 자동으로 넘김
    };

    const stopInterval = () => {
      clearInterval(intervalId);
    };

    rotateCarousel();
    startInterval();

    const carousel = carouselRef.current;

    carousel.addEventListener("mouseenter", stopInterval);
    carousel.addEventListener("mouseleave", startInterval);

    return () => {
      clearInterval(intervalId);
      carousel.removeEventListener("mouseenter", stopInterval);
      carousel.removeEventListener("mouseleave", startInterval);
    };
  }, [selectedIndex]);

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + cellCount) % cellCount);
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % cellCount);
  };

  return (
    <div className="portfolio1">
      <div className="all">
        <section id="circle" ref={carouselRef}>
          <article class="face1">
            <div class="inner" ref={innerRefs[0]}>
              <div className="controll">
                <h2>Musinsa Renewal</h2>
                <div className="content">
                  <div className="left">
                    <div className="vid">
                      <video className="bg_content" autoPlay loop muted>
                        <source src={musinsa} type="video/mp4" />
                      </video>
                    </div>
                    <ul className="list">
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li className="html">HTML</li>
                          <li className="css">CSS</li>
                          <li className="js">JS</li>
                        </ul>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faCalendar} />
                          진행 기간
                        </div>
                        <p>2023.11.15 ~ 2023.12.10</p>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                        </div>
                        <p>Web Design & Publisher 2</p>
                      </li>
                    </ul>
                  </div>
                  <div className="txt">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        평소 관심 있고 좋아하는 브랜드인 무신사를 리뉴얼해
                        보았습니다.
                        <br /> HTML, CSS, 및 JavaScript를 사용하여 웹 디자인 및
                        제작을 진행했으며, Magazine에 사용된 5개의 카드는
                        포토샵을 이용하여 만들었습니다.
                        <br />
                        또한 bx-slider를 활용하여 Magazine의 카드를 자동으로
                        돌아가게 하였으며, hover 했을 때 멈추도록 구성했습니다.
                      </p>
                      <div className="tip">
                        자세한 설명을 원하시면 Readme를 눌러주세요 !
                      </div>
                    </div>

                    <div className="icon">
                      <a
                        href="https://www.notion.so/Musinsa_renewal-daf68dfe98b841a18eb9dc598d9bb070"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faReadme} />
                        <div className="hover_txt">Read me</div>
                      </a>
                      <a
                        href="https://choiinyoung.github.io/musinsa_renewal/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} />
                        <div className="hover_txt">Link</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face2">
            <div class="inner" ref={innerRefs[1]}>
              <div className="controll">
                <h2>HomePage Renewal2</h2>
                <div className="content">
                  <div className="left">
                    <div className="vid">사진</div>
                    <ul className="list">
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li className="react">React</li>

                          <li className="scss">SCSS</li>
                        </ul>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faCalendar} />
                          진행 기간
                        </div>
                        <p>2024.1.10 ~ 2024.2.19</p>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                        </div>
                        <p>Front-end & Web Design 1</p>
                      </li>
                    </ul>
                  </div>
                  <div className="txt">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        모바일 무신사는 깔끔하고 사용자가
                        <br />
                        편리하게 이용할 수 있는 디자인으로 구성되어 있습니다.
                        <br />
                        하지만 홈페이지에서는 제품 및 프로모션 정보가
                        <br />
                        복잡하게 표시되어 있어 사용자들이
                        <br />
                        한눈에 파악하기 어려운 문제가 있었습니다.
                        <br />
                        이에 따라 홈페이지를 리뉴얼하여 사용자 경험을 개선하고
                        <br />
                        효과적으로 활용할 수 있도록 하였습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face3">
            <div class="inner" ref={innerRefs[2]}>
              <div className="controll">
                <h2>Sharing</h2>
                <div className="content">
                  <div className="left">
                    <div className="vid">
                      <video className="bg_content" autoPlay loop muted>
                        <source src={sharing} type="video/mp4" />
                      </video>
                    </div>
                    <ul className="list">
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li className="react">React</li>
                          <li className="node">Node</li>
                          <li className="scss">SCSS</li>
                          <li className="mysql">MySQL</li>
                        </ul>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faCalendar} />
                          진행 기간
                        </div>
                        <p>2023.04.03 ~ 2023.04.19</p>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                        </div>
                        <p>
                          Front-end 3
                          <br />
                          Back-end 2
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="txt">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt ">
                        기자재를 효과적으로 관리하기 위해 제작했습니다.
                        <br />
                        사용자 모드와 관리자 모드로 구성되어 있으며, 사용자
                        모드에서는 대여 물건 확인과 최신 공지사항 확인이
                        가능합니다.
                        <br />
                        관리자 모드에서는 물건 등록과 삭제, 대여 신청 처리,
                        공지사항 작성, 대여 기록 확인이 가능합니다.
                        <br />
                        Chatbot을 디자인하고 제작하였고 React Chatbot kit
                        라이브러리를 활용하여 사용자와 자동 응답형 Chatbot을
                        구현했습니다.
                      </p>

                      <div className="tip">
                        자세한 설명을 원하시면 Readme를 눌러주세요 !
                      </div>
                    </div>

                    <div className="icon">
                      <a
                        href="https://www.notion.so/Sharing-bf0e3f0c1bf9440e97bceece60277b24"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faReadme} />
                        <div className="hover_txt">Read me</div>
                      </a>
                      <a
                        href="https://github.com/jeong-hyuk/sharing-frontend"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} />
                        <div className="hover_txt">Link</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face4">
            <div class="inner" ref={innerRefs[3]}>
              <div className="controll">
                <h2>Re:Used</h2>
                <div className="content">
                  <div className="left">
                    <div className="vid">
                      <video className="bg_content" autoPlay loop muted>
                        <source src={re_used} type="video/mp4" />
                      </video>
                    </div>
                    <ul className="list">
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li className="react">React</li>
                          <li className="spring">SpringBoot</li>
                          <li className="scss">SCSS</li>
                          <li className="mysql">MySQL</li>
                        </ul>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faCalendar} />
                          진행 기간
                        </div>
                        <p>2023.08.03 ~ ing</p>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                        </div>
                        <p>
                          Front-end 4<br />
                          Back-end 2
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="txt">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        저는 당근마켓을 참고하여 근거리 이웃들을 위한 중고거래
                        플랫폼을 제작했습니다.
                        <br />
                        마이페이지의 디자인과 기능을 구현하고, API를 통해
                        백엔드와 데이터를 주고받아 사용자의 관심 상품과 올린
                        상품을 표시했습니다.
                        <br />
                        또한 사용자가 입력한 데이터를 전송하여 회원정보 수정
                        기능을 구현하여 해당 정보를 바로 업데이트할 수 있도록
                        했습니다.
                      </p>

                      <div className="tip">
                        자세한 설명을 원하시면 Readme를 눌러주세요 !
                      </div>
                    </div>

                    <div className="icon">
                      <a
                        href="https://www.notion.so/Re-Used-5707da2cb849402b8f7510d4825a8cba"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faReadme} />
                        <div className="hover_txt">Read me</div>
                      </a>

                      <a
                        href="https://github.com/Sung-Heee/store-front"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} />
                        <div className="hover_txt">Link</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face5">
            <div class="inner" ref={innerRefs[4]}>
              <div className="controll">
                <h2>Portfolio</h2>
                <div className="content">
                  <div className="left">
                    <div className="vid">사진</div>
                    <ul className="list">
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>

                        <ul className="skills">
                          <li className="react">React</li>

                          <li className="scss">SCSS</li>
                        </ul>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faCalendar} />
                          진행 기간
                        </div>
                        <p>2024.02.01 ~ 2023.03.5</p>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                        </div>
                        <p>Front-end & Web Design 1</p>
                      </li>
                    </ul>
                  </div>
                  <div className="txt">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        저에 대한 내용과 지금까지 했던 포트폴리오를 정리하기
                        위해 제작하였습니다.
                        <br />
                      </p>

                      <div className="tip">
                        자세한 설명을 원하시면 Readme를 눌러주세요 !
                      </div>
                    </div>

                    <div className="icon">
                      <a
                        href="https://www.notion.so/Portfolio-8e7595f099d946e9a4815da0757a7932"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faReadme} />
                        <div className="hover_txt">Read me</div>
                      </a>
                      <a
                        href="https://choiinyoung.github.io/portfolio/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} />
                        <div className="hover_txt">Link</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <div className="btn_left" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="btn_right" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>

        <div className="top_txt">마우스를 올리면 멈춰요 !</div>
      </div>
      <Link to="contact" spy={true} smooth={true} offset={5} duration={1000}>
        <div class="arrows">
          <span></span>
        </div>
      </Link>
    </div>
  );
}
