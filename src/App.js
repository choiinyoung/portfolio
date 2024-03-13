import React, { useEffect, useState } from "react";
import "./App.css";
import Available from "./component/Available";
import Header from "./component/Header";
import Home from "./component/Home";
import Portfolio1 from "./component/Portfolio1";
import Portfolio2 from "./component/Portfolio2";
import Profile from "./component/Profile";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const [currentInputs, setCurrentInputs] = useState({
  //   currentWindowHeight: window.innerHeight,
  //   currentPage: 0,
  //   totalPageNumber: 0,
  // });

  // useEffect(() => {
  //   const wholePage = document.querySelector(".slider");
  //   const totalPageNumber = wholePage?.children.length || 0;
  //   setCurrentInputs((prevState) => ({
  //     ...prevState,
  //     totalPageNumber,
  //   }));

  //   const handleResize = () => {
  //     setCurrentInputs((prevState) => ({
  //       ...prevState,
  //       currentWindowHeight: window.innerHeight,
  //     }));
  //   };

  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const pageHeight = currentInputs.currentWindowHeight;
  //     const currentPage = Math.floor(scrollTop / pageHeight);
  //     setCurrentInputs((prevState) => ({
  //       ...prevState,
  //       currentPage,
  //     }));
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [currentInputs.currentWindowHeight]);

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     const deltaY = e.deltaY;
  //     const currentPage = currentInputs.currentPage;
  //     const totalPageNumber = currentInputs.totalPageNumber;

  //     if (deltaY > 0 && currentPage < totalPageNumber - 1) {
  //       window.scrollTo({
  //         top: (currentPage + 1) * 960, // 현재 스크롤 위치에서 1000px만큼 더 내림
  //         behavior: "smooth",
  //       });
  //     } else if (deltaY < 0 && currentPage > 0) {
  //       window.scrollTo({
  //         top: (currentPage - 1) * 960, // 현재 스크롤 위치에서 1000px만큼 더 올림
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [currentInputs]);

  return (
    <>
      <Header />
      <div className="slider">
        <Home />
        <Profile />
        <Available />
        <Portfolio1 />
        {/* <Portfolio2 /> */}
      </div>
    </>
  );
}

export default App;
