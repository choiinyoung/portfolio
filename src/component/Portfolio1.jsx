import React, { useRef, useState, useEffect } from "react";
import "../style/Portfolio1.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="all">
        <div className="scene">
          <div ref={carouselRef} className="carousel">
            <div className="carousel__cell">1</div>
            <div className="carousel__cell">2</div>
            <div className="carousel__cell">3</div>
            <div className="carousel__cell">4</div>
            <div className="carousel__cell">5</div>
            <div className="carousel__cell">6</div>
          </div>
        </div>
        <div className="btn">
          <div className="btn_icon">
            <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrevClick} />
          </div>
          <div className="btn_icon" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
