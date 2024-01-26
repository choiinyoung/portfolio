import React from "react";
import "../style/Portfolio1.scss";
import vid1 from "../vids/vid1.mp4";
import vid2 from "../vids/vid1.mp4";
import vid3 from "../vids/vid1.mp4";
import vid4 from "../vids/vid1.mp4";
export default function Protfolio1() {
  return (
    <div className="portfolio1">
      <section>
        <article class="btn">
          <div class="inner">
            <div class="txt">
              <h2>01</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <figure>
              <video src={vid1} loop muted></video>
            </figure>
          </div>
        </article>
        <article class="btn">
          <div class="inner">
            <div class="txt">
              <h2>02</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <video src="vids/vid2.mp4" loop muted></video>
            </figure>
          </div>
        </article>
        <article class="btn">
          <div class="inner">
            <div class="txt">
              <h2>03</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <video src="vids/vid3.mp4" loop muted></video>
            </figure>
          </div>
        </article>
        <article class="btn">
          <div class="inner">
            <div class="txt">
              <h2>04</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <video src={vid1} loop muted></video>
            </figure>
          </div>
        </article>

        {/* <article class="btn">
          <div class="inner">
            <div class="txt">
              <h2>05</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <video src="vids/vid4.mp4" loop muted></video>
            </figure>
          </div>
        </article>

        <article class="btn">
          <div class="inner">
            <div class="txt">
              <h2>06</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <video src="vids/vid4.mp4" loop muted></video>
            </figure>
          </div>
        </article> */}
      </section>

      <aside>
        <div class="txt">
          <h1>TITLE COMES HERE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span class="close">CLOSE</span>
        </div>

        <figure>
          <video src="vids/vid1.mp4" loop muted></video>
        </figure>
      </aside>
    </div>
  );
}
