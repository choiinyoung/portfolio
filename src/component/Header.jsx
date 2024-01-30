import React from "react";
import "../style/header.scss";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
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
    </>
  );
}
