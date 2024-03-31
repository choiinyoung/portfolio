import React, { useRef } from "react";
import "../style/Footer.scss";
import emailjs, { send } from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileWord } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7geu1s",
        "template_j3ee6ra",
        form.current,
        "hRXkPjn5Jp1kPIqRl"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("성공적으로 이메일이 전송되었습니다.");
        },
        (error) => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };
  return (
    <>
      <div className="footer">
        <div className="all">
          <div className="contact">
            <h2>CONTACT</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="user">
                <input type="text" name="name" placeholder="Name" />
                <input type="tel" name="phone" placeholder="Phone" />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="msg">
                <textarea
                  name="message"
                  cols="100"
                  // rows="12"
                  placeholder="Message"
                ></textarea>
                <button type="submit" value={send}>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className="icon">
            <ul>
              <li>
                <a href="https://github.com/choiinyoung" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/24485a9dbed94667bad7b896d77d1558"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFileWord} />
                </a>
              </li>
            </ul>
            <div className="txt">
              User Copyright 2024 최인영 All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
