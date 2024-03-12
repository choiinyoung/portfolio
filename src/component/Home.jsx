import React from "react";
import "../style/Home.scss";
import { motion } from "framer-motion";
// import bg from "../img/pre-comp2.mp4";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <div className="all">
        {/* <div className="bg-video">
          <video className="content" autoPlay loop muted>
            <source src={bg} type="video/mp4" />
          </video>
        </div> */}
        <div className="home">
          <div class="wrapper">
            {/* <h1 contenteditable data-heading="Web Developer">
              Web Developer
            </h1>
            <h1 contenteditable data-heading="Portpolio" className="txt2">
              Portpolio
            </h1> */}
            <div className="name">
              <motion.div
                className="box"
                animate={{
                  y: [-500, 0, -100, 0, -50, -10, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.2, 0.3, 0.5],
                  repeat: Infinity,
                  repeatDelay: 15,
                }}
              >
                In
              </motion.div>
              <motion.div
                className="box"
                animate={{
                  y: [0, 0, -500, 0, -100, 0, -50, -10, 0, 0, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9, 1],

                  repeat: Infinity,
                  repeatDelay: 15,
                  delay: 1,
                }}
              >
                Young
              </motion.div>
            </div>
            <motion.div
              className="txt_box"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 1],

                repeat: Infinity,
                repeatDelay: 15,
                delay: 2,
              }}
            >
              <h1 data-shadow="Web Developer">Web Developer</h1>
              <h1 data-shadow="Portfolio" className="right">
                Portfolio
              </h1>
            </motion.div>
            <Link
              to="profile"
              spy={true}
              smooth={true}
              offset={5}
              duration={1000}
            >
              <div class="arrows">
                <span></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
