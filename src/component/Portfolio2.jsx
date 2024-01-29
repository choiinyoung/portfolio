import React, { useRef, useState } from "react";
import "../style/Portfolio2.scss";
import Slider from "react-slick";

export default function Portfolio2() {
  const [selectedOption, setSelectedOption] = useState("photoshop");
  const sliderRefs = {
    photoshop: useRef(null),
    Illustrator: useRef(null),
    Video: useRef(null),
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // 10초마다 자동 슬라이딩
    slidesToShow: 4, // 각 슬라이드에 표시할 .img 개수
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 10000, // 10초마다 자동 슬라이딩
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    // 모든 labelsref에서 point를 지움
    Object.values(sliderRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.slickGoTo(0);
      }
    });

    // 선택했던 option에 point추가
    if (sliderRefs[option] && sliderRefs[option].current) {
      sliderRefs[option].current.slickGoTo(0);
    }
  };

  return (
    <>
      <div className="portfolio2">
        <div id="wrap">
          <div className="menu">
            <label
              onClick={() => handleOptionChange("photoshop")}
              className={selectedOption === "photoshop" ? "point" : ""}
            >
              <h3>Photoshop</h3>
            </label>
            <label
              onClick={() => handleOptionChange("Illustrator")}
              className={selectedOption === "Illustrator" ? "point" : ""}
            >
              <h3>Illustrator</h3>
            </label>
            <label
              onClick={() => handleOptionChange("Video")}
              className={selectedOption === "Video" ? "point" : ""}
            >
              <h3>Video</h3>
            </label>
          </div>

          {selectedOption === "photoshop" && (
            <Slider {...settings} ref={sliderRefs.photoshop}>
              <div className="all">
                <ul className="ph_slide">
                  <div className="img">ph1</div>
                  <div className="img">ph2</div>
                  <div className="img">ph3</div>
                  <div className="img">ph4</div>
                  <div className="img">ph5</div>
                  <div className="img">ph6</div>
                </ul>
              </div>
            </Slider>
          )}

          {selectedOption === "Illustrator" && (
            <Slider {...settings} ref={sliderRefs.Illustrator}>
              <div className="all">
                <ul className="ai_slide">
                  <div className="img">ai1</div>
                  <div className="img">ai2</div>
                  <div className="img">ai3</div>
                  <div className="img">ai4</div>
                  <div className="img">ai5</div>
                  <div className="img">ai6</div>
                </ul>
              </div>
            </Slider>
          )}

          {selectedOption === "Video" && (
            <Slider {...settings} ref={sliderRefs.Video}>
              <div className="all">
                <ul className="vi_slide">
                  <div className="img">vi1</div>
                  <div className="img">vi2</div>
                  <div className="img">vi3</div>
                  <div className="img">vi4</div>
                  <div className="img">vi5</div>
                  <div className="img">vi6</div>
                </ul>
              </div>
            </Slider>
          )}
        </div>
      </div>
    </>
  );
}
