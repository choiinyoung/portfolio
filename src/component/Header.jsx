// Header.js

import React, { useState } from "react";
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
    </div>
  );
}
