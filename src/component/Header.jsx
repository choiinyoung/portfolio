import React, { useState, useEffect, useRef } from "react";
import "../style/header.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faFileCode,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const titleRef = useRef(" "); // 기본값으로 Profile 설정

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      console.log(position);
      // 스크롤 위치에 따라 titleRef 변경
      if (position >= 900 && position < 1700) {
        titleRef.current = "Profile";
      } else if (position >= 1701 && position < 2529) {
        titleRef.current = "Available";
      } else if (position >= 2529 && position < 3300) {
        titleRef.current = "Portfolio";
      } else {
        titleRef.current = " ";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrollPosition >= 100 ? "scrolled" : ""}`}>
      <ul className="header_top">
        <li>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={1000}>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link
            to="profile"
            spy={true}
            smooth={true}
            offset={5}
            duration={1000}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
        <li>
          <Link
            to="available"
            spy={true}
            smooth={true}
            offset={5}
            duration={1000}
          >
            <FontAwesomeIcon icon={faCode} />
          </Link>
        </li>
        <li>
          <Link
            to="portfolio1"
            spy={true}
            smooth={true}
            offset={5}
            duration={1000}
          >
            <FontAwesomeIcon icon={faFileCode} />
          </Link>
        </li>
      </ul>
      <div className="title">{titleRef.current}</div>
    </div>
  );
}
