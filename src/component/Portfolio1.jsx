import React, { useEffect, useRef, useState } from "react";
import "../style/Portfolio1.scss";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/javascript.png";
import react from "../img/react.png";
import scss from "../img/sass.png";
import node from "../img/node.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Portfolio1() {
  const carouselRef = useRef(null);
  const [cellCount] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    rotateCarousel();
  }, [selectedIndex]);

  const rotateCarousel = () => {
    const angle = (selectedIndex / cellCount) * -360;
    carouselRef.current.style.transform = `translateZ(-700px) rotateY(${angle}deg)`;
  };

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="portfolio1">
      <div id="wrap">
        <section id="circle" ref={carouselRef}>
          <article class="face1">
            <div class="inner">
              <div className="txt">
                <h2>
                  HomePage
                  <br />
                  Renewal1
                </h2>
                <div className="stack">
                  <p>Stack</p>
                  <ul>
                    <li>
                      <img src={html} alt="html" />
                    </li>
                    <li>
                      <img src={scss} alt="scss" />
                    </li>
                    <li>
                      <img src={js} alt="js" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="vid">비디오</div>
            </div>
            <div className="content">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="icon">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="window"></div>
            </div>
          </article>
          <article class="face2">
            <div class="inner">
              <div className="txt">
                <h2>
                  HomePage
                  <br />
                  Renewal2
                </h2>
                <div className="stack">
                  <p>Stack</p>
                  <ul>
                    <ul>
                      <li>
                        <img src={html} alt="html" />
                      </li>
                      <li>
                        <img src={scss} alt="scss" />
                      </li>
                      <li>
                        <img src={js} alt="js" />
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="vid">비디오</div>
            </div>
            <div className="content">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="icon">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="window"></div>
            </div>
          </article>
          <article class="face3">
            <div class="inner">
              <div className="txt">
                <h2>
                  Musinsa
                  <br />
                  Renewal
                </h2>
                <div className="stack">
                  <p>Stack</p>
                  <ul>
                    <ul>
                      <li>
                        <img src={html} alt="html" />
                      </li>
                      <li>
                        <img src={css} alt="css" />
                      </li>
                      <li>
                        <img src={js} alt="js" />
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="vid">비디오</div>
            </div>
            <div className="content">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="icon">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="window"></div>
            </div>
          </article>
          <article class="face4">
            <div class="inner">
              <div className="txt">
                <h2>Sharing</h2>
                <div className="stack">
                  <p>Stack</p>
                  <ul>
                    <li>
                      <img src={react} alt="html" />
                    </li>
                    <li>
                      <img src={scss} alt="scss" />
                    </li>
                    <li>
                      <img src={node} alt="node" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="vid">비디오</div>
            </div>
            <div className="content">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="icon">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="window"></div>
            </div>
          </article>
          <article class="face5">
            <div class="inner">
              <div className="txt">
                <h2>Re:Used</h2>
                <div className="stack">
                  <p>Stack</p>
                  <ul>
                    <ul>
                      <li>
                        <img src={react} alt="html" />
                      </li>
                      <li>
                        <img src={scss} alt="scss" />
                      </li>
                      <li>
                        <img src={node} alt="js" />
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="vid">비디오</div>
            </div>
            <div className="content">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="icon">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="window"></div>
            </div>
          </article>
          <article class="face6">
            <div class="inner">
              <div className="txt">
                <h2>Portfolio</h2>
                <div className="stack">
                  <p>Stack</p>
                  <ul>
                    <li>
                      <img src={react} alt="html" />
                    </li>
                    <li>
                      <img src={scss} alt="scss" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="vid">비디오</div>
            </div>
            <div className="content">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="icon">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="window"></div>
            </div>
          </article>
        </section>

        <div className="btn">
          <div className="btn_left" onClick={handlePrevClick}></div>
          <div className="btn_right" onClick={handleNextClick}></div>
        </div>
      </div>
    </div>
  );
}
