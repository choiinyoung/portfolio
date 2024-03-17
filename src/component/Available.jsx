import React, { useEffect, useRef, useState } from "react";
import "../style/available.scss";
import Front from "./Availavle/Front";
import Etc from "./Availavle/Etc";
import Tool from "./Availavle/Tool";
import { Link } from "react-scroll";

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
  const animateChars = useRef([]);

  useEffect(() => {
    animateChars.current.forEach((char, index) => {
      char.style.animationDelay = `${index * 100}ms`;
    });
  }, []);
  return (
    <>
      <div className="available">
        <div className="all">
          <div className="all_controllor">
            <div className="btn">
              <ul>
                <li>C</li>
                <li>l</li>
                <li>i</li>
                <li>c</li>
                <li>k</li>
                <li>!</li>
              </ul>
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

          <Link
            to="portfolio1"
            spy={true}
            smooth={true}
            offset={5}
            duration={1000}
          >
            <div class="arrows">
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
