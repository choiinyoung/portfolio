import React, { useState } from "react";
import "../style/available.scss";
import Front from "./Availavle/Front";
import Etc from "./Availavle/Etc";
import Tool from "./Availavle/Tool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquare as farFaSquare } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Available() {
  const [selectedOption, setSelectedOption] = useState("Front");

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
  };
  return (
    <div className="available">
      <div className="bg">
        <div className="top">
          <div className="circle">
            <label>
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Front"}
                onChange={() => handleOptionChange("Front")}
              />
              <span>Front</span>
            </label>

            <label>
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Etc"}
                onChange={() => handleOptionChange("Etc")}
              />
              <span>Etc</span>
            </label>

            <label>
              <input
                type="radio"
                name="option"
                checked={selectedOption === "Tool"}
                onChange={() => handleOptionChange("Tool")}
              />
              <span>Tool</span>
            </label>
          </div>
          <div className="btn">
            <div className="icon1">
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="icon2">
              <FontAwesomeIcon icon={farFaSquare} />
            </div>
            <div className="icon3">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
      </div>
      {renderSelectedComponent()}
    </div>
  );
}
