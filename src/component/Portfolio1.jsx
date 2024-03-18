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

    // const startInterval = () => {
    //   intervalId = setInterval(() => {
    //     handleNextClick();
    //   }, 5000); // 5초마다 자동으로 넘김
    // };

    // const stopInterval = () => {
    //   clearInterval(intervalId);
    // };

    rotateCarousel();
    // startInterval();

    const carousel = carouselRef.current;

    // carousel.addEventListener("mouseenter", stopInterval);
    // carousel.addEventListener("mouseleave", startInterval);

    return () => {
      clearInterval(intervalId);
      // carousel.removeEventListener("mouseenter", stopInterval);
      // carousel.removeEventListener("mouseleave", startInterval);
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
        <div className="title">Portfolio</div>
        <section id="circle" ref={carouselRef}>
          <article class="face1">
            <div class="inner" ref={innerRefs[0]}>
              <div className="controll">
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
                <div className="txt">
                  <h2>Musinsa Renewal</h2>

                  <div className="detail">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        모바일 무신사는 깔끔하고 사용자가 편리하게 이용할 수
                        있는
                        <br />
                        디자인으로 구성되어 있습니다.
                        <br />
                        하지만 홈페이지에서는 제품 및 프로모션 정보가 복잡하게
                        표시되어 있어
                        <br />
                        사용자들이 한눈에 파악하기 어려운 문제가 있었습니다.
                        <br />
                        이에 따라 홈페이지를 리뉴얼하여 사용자 경험을 개선하고
                        <br />
                        효과적으로 활용할 수 있도록 하였습니다.
                      </p>
                    </div>
                    <div className="mine">
                      <div className="content_title">
                        <p>👩🏻‍💻&nbsp; 담당한 기능</p>
                      </div>
                      <p className="detail_txt">
                        <ul className="mine_list">
                          <li>
                            &nbsp;SALE,SEASON상품 페이지 및 Magazine페이지를
                            <br />
                            디자인 하였습니다.
                          </li>
                          <li>
                            &nbsp;Magazine에 사용되는 카드를 Photoshop을
                            사용하여
                            <br />
                            제작하였습니다.
                          </li>
                          <li>
                            &nbsp;메인 화면에 bx-slider를 사용하여 3장의 사진이
                            <br />
                            자동으로 돌아가도록 구현되었습니다.
                          </li>

                          <li>
                            &nbsp; bx-slider를 사용하여 5장의 카드가 자동으로
                            슬라이드되도록 <br />
                            구현하였으며 hover 시 자동 슬라이드가 멈추도록
                            설정하였습니다.
                          </li>
                        </ul>
                        <div className="tip">
                          &nbsp;자세한 설명을 원하시면 Readme를 눌러
                          확인해주세요 !
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face2">
            <div class="inner" ref={innerRefs[1]}>
              <div className="controll">
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
                  <div className="icon">
                    <a
                      href="https://github.com/Sung-Heee/store-front"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faReadme} />
                      <div className="hover_txt">Read me</div>
                    </a>
                    <a
                      href="https://www.notion.so/Sharing-bf0e3f0c1bf9440e97bceece60277b24?pvs=4"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLink} />
                      <div className="hover_txt">Link</div>
                    </a>
                  </div>
                </div>
                <div className="txt">
                  <h2>HomePage Renewal2</h2>

                  <div className="detail">
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
                    <div className="mine">
                      <div className="content_title">
                        <p>👩🏻‍💻&nbsp; 담당한 기능</p>
                      </div>
                      <p className="detail_txt">
                        <ul className="mine_list">
                          <li>
                            &nbsp;SALE,SEASON상품 페이지 및 Magazine페이지를
                            <br />
                            디자인 하였습니다.
                          </li>
                          <li>
                            &nbsp;Magazine에 사용되는 카드를 Photoshop을
                            사용하여
                            <br />
                            제작하였습니다.
                          </li>
                          <li>
                            &nbsp;메인 화면에 bx-slider를 사용하여 3장의 사진이
                            <br />
                            자동으로 돌아가도록 구현되었습니다.
                          </li>

                          <li>
                            &nbsp; bx-slider를 사용하여 5장의 카드가 자동으로
                            슬라이드되도록 <br />
                            구현하였으며 hover 시 자동 슬라이드가 멈추도록
                            설정하였습니다.
                          </li>
                        </ul>
                        <div className="tip">
                          &nbsp;자세한 설명을 원하시면 Readme를 눌러
                          확인해주세요 !
                        </div>
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
                <div className="txt">
                  <h2>Sharing</h2>

                  <div className="detail">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt ">
                        학교 내에서 종이 서류에는 존재하는 것으로 표시되지만
                        <br />
                        실제로 찾아보면 없는 경우가 빈번히 발생하여
                        <br />
                        분실 및 도난이 이슈가 되었습니다.
                        <br />
                        이를 위해 기자재를 효과적으로 관리하기 위해
                        <br />
                        사용자와 관리자 모드로 구성하여 프로젝트를
                        진행하였습니다.
                        <br />
                        사용자 모드에서는 대여 가능한 물건 확인,
                        <br />
                        대여 중인 물건 확인, 최신 공지사항 확인이 가능하며
                        <br />
                        관리자 모드는 물건 등록/삭제, 대여 신청 처리,
                        <br />
                        공지사항 작성, 대여 기록 확인이 가능하게 하였습니다.
                      </p>
                    </div>
                    <div className="mine">
                      <div className="content_title">
                        <p>👩🏻‍💻&nbsp; 담당한 기능</p>
                      </div>
                      <p className="detail_txt">
                        <ul className="mine_list">
                          <li>
                            &nbsp;Chatbot을 달력,채팅,팀원정보로 총 3가지로 나눠
                            디자인 및 구현
                          </li>
                          <li>
                            &nbsp;React Calendar 라이브러리를 사용하여
                            <br />
                            현재 날짜를 표현하는 달력 구현
                          </li>
                          <li>
                            &nbsp;React Chatbot Kit 라이브러리를 활용하여
                            <br />
                            사용자와 자동 응답형 챗봇 구현
                          </li>

                          <li>
                            &nbsp; 미리 설정한 질문 버튼을 통해 해당 질문에 대한
                            설명 제공
                          </li>
                          <li>
                            &nbsp; 사용자가 문장 또는 단어를 입력하면 미리
                            설정한 단어 및 문장과 <br />
                            비교하여 일치하거나 일부가 일치하는 경우, <br />
                            미리 설정한 다양한 답변 중 랜덤하게 선택하여 응답
                          </li>
                        </ul>
                        <div className="tip">
                          &nbsp;자세한 설명을 원하시면 Readme를 눌러
                          확인해주세요 !
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face4">
            <div class="inner" ref={innerRefs[3]}>
              <div className="controll">
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
                <div className="txt">
                  <h2>Re:Used</h2>

                  <div className="detail">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        당근마켓을 참고하여 근거리 이웃들을 위한
                        <br />
                        중고거래 플랫폼을 제작했습니다.
                        <br />
                        사용자는 회원가입 후 판매 또는 거래하고자 하는 상품을
                        등록할 수 있으며
                        <br />
                        관심 있는 상품을 위시리스트에 담을 수 있습니다.
                        <br />
                        마이페이지에서는 사용자가 등록한 상품 목록과
                        <br />
                        위시리스트에 담은 상품 목록을 확인할 수 있습니다.
                        <br />
                        또한 회원정보 수정 기능을 통해 개인 정보를 업데이트할 수
                        있습니다.
                      </p>
                    </div>
                    <div className="mine">
                      <div className="content_title">
                        <p>👩🏻‍💻&nbsp; 담당한 기능</p>
                      </div>
                      <p className="detail_txt">
                        <ul className="mine_list">
                          <li>&nbsp;마이페이지의 디자인 및 기능들을 구현</li>
                          <li>
                            &nbsp;나의 거래정보,관심상품의 데이터를 백엔드에서
                            받아와 <br />
                            마이페이지에 표시하였습니다.
                          </li>
                          <li>
                            &nbsp;회원정보수정에서 사용자가 입력한 데이터를
                            백엔드로 전송하여
                            <br />
                            해당 정보를 업데이트되게 하였습니다.
                          </li>
                        </ul>
                        <div className="tip">
                          &nbsp;자세한 설명을 원하시면 Readme를 눌러
                          확인해주세요 !
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face5">
            <div class="inner" ref={innerRefs[4]}>
              <div className="controll">
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
                <div className="txt">
                  <h2>Portfolio</h2>

                  <div className="detail">
                    <div className="introduce">
                      <div className="content_title">
                        <p>💡&nbsp; 소개</p>
                      </div>
                      <p className="detail_txt">
                        저에 대한 내용과 지금까지 했던 포트폴리오를 정리하기
                        위해 제작하였습니다.
                        <br />
                      </p>
                    </div>
                    <div className="mine">
                      <div className="content_title">
                        <p>👩🏻‍💻&nbsp; 담당한 기능</p>
                      </div>
                      <p className="detail_txt">
                        <ul className="mine_list">
                          <li>
                            &nbsp;SALE,SEASON상품 페이지 및 Magazine페이지를
                            <br />
                            디자인 하였습니다.
                          </li>
                          <li>
                            &nbsp;Magazine에 사용되는 카드를 Photoshop을
                            사용하여
                            <br />
                            제작하였습니다.
                          </li>
                          <li>
                            &nbsp;메인 화면에 bx-slider를 사용하여 3장의 사진이
                            <br />
                            자동으로 돌아가도록 구현되었습니다.
                          </li>

                          <li>
                            &nbsp; bx-slider를 사용하여 5장의 카드가 자동으로
                            슬라이드되도록 <br />
                            구현하였으며 hover 시 자동 슬라이드가 멈추도록
                            설정하였습니다.
                          </li>
                        </ul>
                        <div className="tip">
                          &nbsp;자세한 설명을 원하시면 Readme를 눌러
                          확인해주세요 !
                        </div>
                      </p>
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

        <ul className="bottom_txt">
          <li>마</li>
          <li>우</li>
          <li>스</li>
          <li>를</li>
          <li>올</li>
          <li>리</li>
          <li>면</li>
          <li>멈</li>
          <li>춰</li>
          <li>요</li>
          <li>!</li>
        </ul>
      </div>
      <Link to="contact" spy={true} smooth={true} offset={5} duration={1000}>
        <div class="arrows">
          <span></span>
        </div>
      </Link>
    </div>
  );
}
