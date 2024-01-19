import React from "react";
import "../style/header.scss";
import { Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Available from "./Available";

export default function Header() {
  return (
    <>
      <div className="header">
        <p className="title">Front-end & Web Developer</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/available">Available</Link>
        </nav>
        {/* <li>Portfolio</li>
        <li>Contact</li> */}
      </div>
    </>
  );
}
