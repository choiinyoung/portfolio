import React, { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderHeader = () => {
    switch (true) {
      case scrollY >= 900:
        return (
          <div className="left">
            <ul className="header_top">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="profile"
                  spy={true}
                  smooth={true}
                  offset={45}
                  duration={1000}
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="available"
                  spy={true}
                  smooth={true}
                  offset={48}
                  duration={1000}
                >
                  <FontAwesomeIcon icon={faCode} />
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio1"
                  spy={true}
                  smooth={true}
                  offset={49}
                  duration={1000}
                >
                  <FontAwesomeIcon icon={faFileCode} />
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio2"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  <FontAwesomeIcon icon={faPenNib} />
                </Link>
              </li>
            </ul>
          </div>
        );
      default:
        return (
          <div className="header">
            <ul className="header_top">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="profile"
                  spy={true}
                  smooth={true}
                  offset={45}
                  duration={1000}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="available"
                  spy={true}
                  smooth={true}
                  offset={48}
                  duration={1000}
                >
                  Available
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio1"
                  spy={true}
                  smooth={true}
                  offset={49}
                  duration={1000}
                >
                  Portfolio#1
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio2"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  Portfolio#2
                </Link>
              </li>
            </ul>
          </div>
        );
    }
  };

  return renderHeader();
}
