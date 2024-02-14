import React, { useEffect, useRef, useState } from "react";
import "../style/available.scss";
import Front from "./Availavle/Front";
import Etc from "./Availavle/Etc";
import Tool from "./Availavle/Tool";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Available() {
  const [selectedOption, setSelectedOption] = useState("Front");
  const labelsRef = {
    Front: useRef(null),
    Etc: useRef(null),
    Tool: useRef(null),
  };
  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "Front":
        return <Front />;
      case "Etc":
        return <Etc />;
      case "Tool":
        return <Tool />;
      default:
        return null;
    }
  };
  const handleOptionChange = (option) => {
    console.log("Selected Option:", option);
    setSelectedOption(option);

    Object.values(labelsRef).forEach((labelRef) => {
      labelRef.current.classList.remove("point");
    });

    labelsRef[option].current.classList.add("point");
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="3000"
      data-aos-easing="linear"
      className="available"
    >
      <div className="bg">{renderSelectedComponent()}</div>

      <div className="top">
        <div className="circle">
          <label
            ref={labelsRef.Front}
            className={selectedOption === "Front" ? "point" : ""}
          >
            <input
              type="radio"
              name="option"
              checked={selectedOption === "Front"}
              onChange={() => handleOptionChange("Front")}
            />
            <span>Front</span>
          </label>

          <label
            ref={labelsRef.Etc}
            className={selectedOption === "Etc" ? "point" : ""}
          >
            <input
              type="radio"
              name="option"
              checked={selectedOption === "Etc"}
              onChange={() => handleOptionChange("Etc")}
            />
            <span>Etc</span>
          </label>

          <label
            ref={labelsRef.Tool}
            className={selectedOption === "Tool" ? "point" : ""}
          >
            <input
              type="radio"
              name="option"
              checked={selectedOption === "Tool"}
              onChange={() => handleOptionChange("Tool")}
            />
            <span>Tool</span>
          </label>
        </div>
      </div>
    </div>
  );
}
