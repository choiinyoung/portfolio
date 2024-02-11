import React from "react";
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
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
            className="nav-link"
          >
            <FontAwesomeIcon icon={faPenNib} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
