import React from "react";
import "../style/header.scss";

export default function Header() {
  return (
    <div className="header">
      <p className="title">Front-end & Web Developer</p>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Available</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
