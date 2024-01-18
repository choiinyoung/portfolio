import React, { useEffect, useState } from "react";
import "../style/Home.scss";
import boxImage from "../img/box.png";

export default function Home() {
  const texts = [
    "긍정적인",
    "책임감 있는",
    "도전적인",
    "열정이 넘치는",
    "욕심이 많은",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // cleanup 함수
    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);

  useEffect(() => {
    // index가 변경될 때마다 텍스트 업데이트
    setText(texts[index]);
  }, [index]);

  return (
    <div className="person">
      <p className="title">Front-end & Web Developer</p>
      <img src={boxImage} alt="Box" />
      <div className="txt">
        <p>저는</p>
        <p className="important">{text}</p>
        <p>사람입니다</p>
      </div>
    </div>
  );
}
