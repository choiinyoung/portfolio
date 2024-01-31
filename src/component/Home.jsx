import React, { useEffect, useState } from "react";
import "../style/Home.scss";

export default function Home() {
  const texts = [
    "긍정적인",
    "책임감 있는",
    "도전적인",
    "열정이 넘치는",
    "욕심이 많은",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCharIndex((prevCharIndex) => {
          if (prevCharIndex < texts[index].length) {
            // 현재까지 보여줄 글자의 인덱스 증가
            setText((prevText) => prevText + texts[index][prevCharIndex]);
            return prevCharIndex + 1;
          } else {
            // 현재 텍스트의 글자를 모두 보여준 경우
            clearInterval(interval); // 기존 interval 정지

            // 0.8초 후에 다음 텍스트로 이동하도록 새로운 interval 설정
            setTimeout(() => {
              const nextIndex = (index + 1) % texts.length;
              setIndex(nextIndex);
              setCharIndex(0);
              setText("");
            }, 800);

            return prevCharIndex; // charIndex는 그대로 유지하여 추가 글자가 없도록 함
          }
        });
      },
      charIndex === 0 ? 100 : 200
    ); // 글자가 추가되기 전이면 150ms, 추가된 후이면 200ms 간격으로 글자를 추가

    // cleanup 함수
    return () => {
      clearInterval(interval);
    };
  }, [index, texts, charIndex]);

  return (
    <div className="person home">
      <div className="txt">
        <p className="title">Front-end & Web Developer</p>

        <p>저는</p>
        <p className="important">{text}</p>
        <p>사람입니다</p>
      </div>
      <div className="ripple1">
        <div className="inner-ripple ripple-1"></div>
        <div className="inner-ripple ripple-2"></div>
      </div>
    </div>
  );
}
