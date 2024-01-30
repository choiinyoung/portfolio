import React, { useRef, useState } from "react";
import "../style/Portfolio2.scss";

export default function Portfolio2() {
  const [selectedOption, setSelectedOption] = useState("photoshop");
  const labelsRef = {
    photoshop: useRef(null),
    Illustrator: useRef(null),
    Video: useRef(null),
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "photoshop":
        return (
          <ul className="ph_slide">
            <div className="img">photoshop 준비중</div>
            {/* <div className="img">ph2</div>
            <div className="img">ph3</div>
            <div className="img">ph4</div>
            <div className="img">ph5</div>
            <div className="img">ph6</div> */}
          </ul>
        );
      case "Illustrator":
        return (
          <ul className="ai_slide">
            <div className="img">Illustrator 준비중</div>
            {/* <div className="img">ai2</div>
            <div className="img">ai3</div>
            <div className="img">ai4</div>
            <div className="img">ai5</div>
            <div className="img">ai6</div> */}
          </ul>
        );
      case "Video":
        return (
          <ul className="vi_slide">
            <div className="img">Video 준비중</div>
            {/* <div className="img">vi2</div>
            <div className="img">vi3</div>
            <div className="img">vi4</div>
            <div className="img">vi5</div>
            <div className="img">vi6</div> */}
          </ul>
        );
      default:
        return null;
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    // Remove "point" class from all labels
    Object.values(labelsRef).forEach((labelRef) => {
      labelRef.current.classList.remove("point");
    });

    // Add "point" class to the selected label
    labelsRef[option].current.classList.add("point");
  };

  return (
    <>
      <div className="portfolio2">
        <div id="wrap">
          <div className="menu">
            <label
              ref={labelsRef.photoshop}
              className={selectedOption === "photoshop" ? "point" : ""}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === "photoshop"}
                onChange={() => handleOptionChange("photoshop")}
              />
              <h3>Photoshop</h3>
            </label>
            <label
              ref={labelsRef.Illustrator}
              className={selectedOption === "Illustrator" ? "point" : ""}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Illustrator"}
                onChange={() => handleOptionChange("Illustrator")}
              />
              <h3>Illustrator</h3>
            </label>
            <label
              ref={labelsRef.Video}
              className={selectedOption === "Video" ? "point" : ""}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Video"}
                onChange={() => handleOptionChange("Video")}
              />
              <h3>Video</h3>
            </label>
          </div>

          {renderSelectedComponent()}
        </div>
      </div>
    </>
  );
}
