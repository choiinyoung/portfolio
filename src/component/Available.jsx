import React, { useRef, useState } from "react";
import "../style/available.scss";
import Front from "./Availavle/Front";
import Etc from "./Availavle/Etc";
import Tool from "./Availavle/Tool";
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
      labelRef.current.classList.remove("active");
    });

    labelsRef[option].current.classList.add("active");
  };
  return (
    <>
      <div className="available">
        <div className="all">
          <div className="title">Available</div>

          <div className="btn">
            <label
              ref={labelsRef.Front}
              className={selectedOption === "Front" ? "active" : ""}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Front"}
                onChange={() => handleOptionChange("Front")}
              />
              <span>&lt; Front /&gt;</span>
            </label>

            <label
              ref={labelsRef.Etc}
              className={selectedOption === "Etc" ? "active" : ""}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Etc"}
                onChange={() => handleOptionChange("Etc")}
              />
              <span>&lt; Etc /&gt;</span>
            </label>

            <label
              ref={labelsRef.Tool}
              className={selectedOption === "Tool" ? "active" : ""}
            >
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Tool"}
                onChange={() => handleOptionChange("Tool")}
              />
              <span>&lt; Tool /&gt;</span>
            </label>
          </div>
          <div className="window">
            <div className="controll">
              <div className="top">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="content">{renderSelectedComponent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
