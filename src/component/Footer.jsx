import React, { useRef } from "react";
import "../style/Footer.scss";
import emailjs, { send } from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileWord } from "@fortawesome/free-regular-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
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
                <input
                  type="text"
                  name="name"
                  id="user_name"
                  placeholder="Name"
                />
                <input
                  type="tel"
                  name="phone"
                  id="user_tel"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  name="email"
                  id="user_emil"
                  placeholder="Email"
                />
              </div>
              <div className="msg">
                <textarea
                  id="message"
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
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFileWord} />
              </li>
              <li>
                <FontAwesomeIcon icon={faBlogger} />
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
