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
  faAngleLeft,
  faAngleRight,
  faGears,
  faPeopleGroup,
  faChevronUp,
  faChevronDown,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
export default function Portfolio1() {
  const carouselRef = useRef(null);
  const innerRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // const btnRef = useRef(null);
  const [cellCount] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [chevronIcon, setChevronIcons] = useState({
    Intr1: faChevronDown,
    Mine1: faChevronDown,
    Intr2: faChevronDown,
    Mine2: faChevronDown,
    Intr3: faChevronDown,
    Mine3: faChevronDown,
    Intr4: faChevronDown,
    Mine4: faChevronDown,
    Intr5: faChevronDown,
    Mine5: faChevronDown,
    Intr6: faChevronDown,
    Mine6: faChevronDown,
  });
  const clickRef = {
    Intr1: useRef(null),
    Mine1: useRef(null),
    Intr2: useRef(null),
    Mine2: useRef(null),
    Intr3: useRef(null),
    Mine3: useRef(null),
    Intr4: useRef(null),
    Mine4: useRef(null),
    Intr5: useRef(null),
    Mine5: useRef(null),
    Intr6: useRef(null),
    Mine6: useRef(null),
  };

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

    // let intervalId;

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

    // const carousel = carouselRef.current;

    // carousel.addEventListener("mouseenter", stopInterval);
    // carousel.addEventListener("mouseleave", startInterval);

    // return () => {
    //   clearInterval(intervalId);
    //   carousel.removeEventListener("mouseenter", stopInterval);
    //   carousel.removeEventListener("mouseleave", startInterval);
    // };
  }, [selectedIndex]);

  const handlePrevClick = () => {
    // 다음 페이지로 넘어가기 전에 모든 요소를 닫음
    Object.values(clickRef).forEach((ref) => {
      const siblingRef = ref.current.nextSibling;
      if (siblingRef.classList.contains("on")) {
        siblingRef.classList.remove("on");
        siblingRef.classList.add("off");
      }
    });
    setSelectedIndex((prevIndex) => (prevIndex - 1 + cellCount) % cellCount);
  };

  const handleNextClick = () => {
    // 다음 페이지로 넘어가기 전에 모든 요소를 닫음
    Object.values(clickRef).forEach((ref) => {
      const siblingRef = ref.current.nextSibling;
      if (siblingRef.classList.contains("on")) {
        siblingRef.classList.remove("on");
        siblingRef.classList.add("off");
      }
    });

    setSelectedIndex((prevIndex) => (prevIndex + 1) % cellCount);
  };
  const toggleClick = (option) => {
    const targetRef = clickRef[option].current;
    const siblingRef = targetRef.nextSibling;
    const parentRef = siblingRef.parentNode;

    if (siblingRef.classList.contains("off")) {
      siblingRef.classList.remove("off");
      siblingRef.classList.add("on");
      parentRef.style.height = "60%";
    } else {
      siblingRef.classList.remove("on");
      siblingRef.classList.add("off");
      parentRef.style.height = "20%";
    }
    setChevronIcons((prevIcons) => ({
      ...prevIcons,
      [option]:
        prevIcons[option] === faChevronDown ? faChevronUp : faChevronDown,
    }));
  };
  return (
    <div className="portfolio1">
      <div id="wrap">
        <div className="title">Portfolio</div>
        <section id="circle" ref={carouselRef}>
          <article class="face1">
            <div class="inner" ref={innerRefs[0]}>
              <div className="controll">
                <div className="left">
                  <div className="vid">사진</div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </div>
                <div className="txt">
                  <h2>HomePage Renewal1</h2>

                  <div className="detail">
                    <ul>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li>React</li>
                          <li>SCSS</li>
                        </ul>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faCalendar} />
                          진행 기간
                        </div>
                        <p>2023.11.20 ~ 2023.12.28</p>
                      </li>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faPeopleGroup} />팀 구성
                        </div>
                        <p>Front-end & Web Design 1</p>
                      </li>
                    </ul>
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Intr1")}
                          ref={clickRef.Intr1}
                        >
                          <p>💡&nbsp; 소개</p>
                          <FontAwesomeIcon icon={chevronIcon.Intr1} />
                        </div>
                        <p className="detail_txt off">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ipsam totam voluptatibus quod architecto,
                          dolores maiores, recusandae suscipit et sequi eos
                          molestiae, quaerat velit. Perspiciatis corrupti,
                          nostrum excepturi ratione blanditiis id!
                        </p>
                      </div>
                      <div className="mine">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Mine1")}
                          ref={clickRef.Mine1}
                        >
                          <p>👩🏻‍💻&nbsp;담당한 기능</p>
                          <FontAwesomeIcon icon={chevronIcon.Mine1} />
                        </div>
                        <p className="detail_txt off">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ipsam totam voluptatibus quod architecto,
                          dolores maiores, recusandae suscipit et sequi eos
                          molestiae, quaerat velit. Perspiciatis corrupti,
                          nostrum excepturi ratione blanditiis id!
                        </p>
                      </div>
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
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </div>
                <div className="txt">
                  <h2>HomePage Renewal2</h2>

                  <div className="detail">
                    <ul>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li>React</li>
                          <li>SCSS</li>
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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Intr2")}
                          ref={clickRef.Intr2}
                        >
                          <p>💡&nbsp; 소개</p>
                          <FontAwesomeIcon icon={chevronIcon.Intr2} />
                        </div>
                        <p className="detail_txt off">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ipsam totam voluptatibus quod architecto,
                          dolores maiores, recusandae suscipit et sequi eos
                          molestiae, quaerat velit. Perspiciatis corrupti,
                          nostrum excepturi ratione blanditiis id!
                        </p>
                      </div>
                      <div className="mine">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Mine2")}
                          ref={clickRef.Mine2}
                        >
                          <p>👩🏻‍💻&nbsp;담당한 기능</p>
                          <FontAwesomeIcon icon={chevronIcon.Mine2} />
                        </div>
                        <p className="detail_txt off">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ipsam totam voluptatibus quod architecto,
                          dolores maiores, recusandae suscipit et sequi eos
                          molestiae, quaerat velit. Perspiciatis corrupti,
                          nostrum excepturi ratione blanditiis id!
                        </p>
                      </div>
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
                  <div className="vid">사진</div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </div>
                <div className="txt">
                  <h2>Musinsa Renewal</h2>

                  <div className="detail">
                    <ul>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JS</li>
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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Intr3")}
                          ref={clickRef.Intr3}
                        >
                          <p>💡&nbsp; 소개</p>
                          <FontAwesomeIcon icon={chevronIcon.Intr3} />
                        </div>
                        <p className="detail_txt off">
                          모바일 무신사 디자인은 깔끔하고 사용자가 보기 편하게
                          잘 디자인 되어있지만
                          <br />
                          웹사이트로 본 무신사는 제품들과 관련 프로모션등이
                          <br />
                          복잡하고 한눈에 보기 힘들어 리뉴얼 하게 되었다.
                        </p>
                      </div>
                      <div className="mine">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Mine3")}
                          ref={clickRef.Mine3}
                        >
                          <p>👩🏻‍💻&nbsp;담당한 기능</p>
                          <FontAwesomeIcon icon={chevronIcon.Mine3} />
                        </div>
                        <p className="detail_txt off">
                          musinsa에 메뉴를 다시 정리하여 디자인 하였고
                          <br />
                          BEST상품과 SEASON상품을 나눠
                          <br />
                          hover했을 때 해당 품목에 인기상품 6가지를 보이게
                          하였다
                          <br />
                          또한 스와이프 라이브러리를 사용하여 5개의 매거진을
                          보이게 하였다.
                        </p>
                      </div>
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
                  <div className="vid">사진</div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </div>
                <div className="txt">
                  <h2>Sharing</h2>

                  <div className="detail">
                    <ul>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li>React</li>
                          <li>Node</li>
                          <li>SCSS</li>
                          <li>MySQL</li>
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
                          Bacl-end2
                        </p>
                      </li>
                    </ul>
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Intr4")}
                          ref={clickRef.Intr4}
                        >
                          <p>💡&nbsp; 소개</p>
                          <FontAwesomeIcon icon={chevronIcon.Intr4} />
                        </div>
                        <p className="detail_txt off">
                          물건관리대여홈페이지로 사용자모드와 관리자모드로 총
                          2가지를 만들었습니다
                          <br />
                          사용자모드에서는 어떤 물건들이 대여 가능한지,
                          <br />
                          내가 현재 어떤 물건을 대여했는지 확인여부와
                          <br />
                          최신 공지사항을 확인 할 수 있습니다
                          <br />
                          사용자모드에는 물건을 등록하거나 삭제할 수 있고
                          대여신청이 들어온 물건을 볼 수 있고
                          <br />
                          그에 대한 승인을 할 수 있습니다.
                          <br />
                          또한 공지사항에 글을 작성할 수 있고 물건들의 대여
                          기록을 볼 수 있습니다
                        </p>
                      </div>
                      <div className="mine">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Mine4")}
                          ref={clickRef.Mine4}
                        >
                          <p>👩🏻‍💻&nbsp;담당한 기능</p>
                          <FontAwesomeIcon icon={chevronIcon.Mine4} />
                        </div>
                        <p className="detail_txt off">
                          - React 라이브러리인 `react-calendar`을 활용하여 현재
                          날짜를 시각적으로 표현하는 달력을 구현
                          <br />
                          - 사용자에게 직관적인 날짜 선택 기능을 제공
                          <br />
                          - UI/UX를 강화하기 위해
                          `react-calendar/dist/Calendar.css` 을 적용
                          <br />- `react-chatbot-kit` 라이브러리를 활용하여
                          사용자와 자동 응답형 챗봇을 구현
                          <br />- 챗봇은 버튼을 선택하면 해당 주제에 대한 자세한
                          설명을 제공
                          <br />- 사용자가 직접 문장을 입력하면 미리 설정한
                          다양한 답변 중에서 랜덤하게 선택하여 응답하도록 설계
                        </p>
                      </div>
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
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </div>
                <div className="txt">
                  <h2>Re:Used</h2>

                  <div className="detail">
                    <ul>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>
                        <ul className="skills">
                          <li>React</li>
                          <li>SpringBoot</li>
                          <li>SCSS</li>
                          <li>MySQL</li>
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
                          Back-end2
                        </p>
                      </li>
                    </ul>
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Intr5")}
                          ref={clickRef.Intr5}
                        >
                          <p>💡&nbsp; 소개</p>
                          <FontAwesomeIcon icon={chevronIcon.Intr5} />
                        </div>
                        <p className="detail_txt off">중고거래하는 사이트</p>
                      </div>
                      <div className="mine">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Mine5")}
                          ref={clickRef.Mine5}
                        >
                          <p>👩🏻‍💻&nbsp;담당한 기능</p>
                          <FontAwesomeIcon icon={chevronIcon.Mine5} />
                        </div>
                        <p className="detail_txt off">
                          - MYPAGE에서 디자인과 기능을 구축하며, 백엔드와의
                          데이터 통신을 통해 사용자의 정보를 보여주고 사용자가
                          입력한 데이터를 백엔드에 전송하여 DB를 수정하는 기능을
                          구현
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="face6">
            <div class="inner" ref={innerRefs[5]}>
              <div className="controll">
                <div className="left">
                  <div className="vid">사진</div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </div>
                <div className="txt">
                  <h2>Portfolio</h2>

                  <div className="detail">
                    <ul>
                      <li>
                        <div className="content_title">
                          <FontAwesomeIcon icon={faGears} />
                          Skills
                        </div>

                        <ul className="skills">
                          <li>React</li>
                          <li>SCSS</li>
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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Intr6")}
                          ref={clickRef.Intr6}
                        >
                          <p>💡&nbsp; 소개</p>
                          <FontAwesomeIcon icon={chevronIcon.Intr6} />
                        </div>
                        <p className="detail_txt off">
                          저에 대한 내용과 지금까지 했던 포트폴리오를 정리하기
                          위해 제작하였습니다.
                          <br />
                        </p>
                      </div>
                      <div className="mine">
                        <div
                          className="content_title"
                          onClick={() => toggleClick("Mine6")}
                          ref={clickRef.Mine6}
                        >
                          <p>👩🏻‍💻&nbsp;담당한 기능</p>
                          <FontAwesomeIcon icon={chevronIcon.Mine6} />
                        </div>
                        <p className="detail_txt off">포트폴리오</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* <div className="btn" ref={btnRef}> */}
        <div className="btn_left" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="btn_right" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
