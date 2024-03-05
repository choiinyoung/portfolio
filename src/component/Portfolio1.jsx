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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div className="content_title">
                          <p>💡&nbsp; 소개</p>
                        </div>
                        <p className="detail_txt">
                          모바일 무신사 디자인은 깔끔하고 사용자가 보기 편하게
                          잘 디자인 되어있지만
                          <br />
                          웹사이트로 본 무신사는 제품들과 관련 프로모션등이
                          <br />
                          복잡하고 한눈에 보기 힘들어 리뉴얼 하게 되었다.
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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div className="content_title">
                          <p>💡&nbsp; 소개</p>
                        </div>
                        <p className="detail_txt">
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
                  <h2>Sharing</h2>

                  <div className="detail">
                    <ul>
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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div
                          className="content_title"
                          // onClick={() => toggleClick("Intr4")}
                          // ref={clickRef.Intr4}
                        >
                          <p>💡&nbsp; 소개</p>
                          {/* <FontAwesomeIcon icon={chevronIcon.Intr4} /> */}
                        </div>
                        <p className="detail_txt ">
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
                  <h2>Re:Used</h2>

                  <div className="detail">
                    <ul>
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
                    <div className="bottom_txt">
                      <div className="introduce">
                        <div className="content_title">
                          <p>💡&nbsp; 소개</p>
                        </div>
                        <p className="detail_txt">중고거래하는 사이트</p>
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
                  <h2>Portfolio</h2>

                  <div className="detail">
                    <ul>
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
                    <div className="bottom_txt">
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
      </div>
    </div>
  );
}
