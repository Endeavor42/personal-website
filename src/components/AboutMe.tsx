import { useEffect } from "react";
import TypeWriter from "typewriter-effect";
import gsap from "gsap";

import "../styles/aboutMe.scss";
import phonesImg from "../images/about_me/phones.svg";
import globeImg from "../images/about_me/globe.svg";
import minionFrontImg from "../images/about_me/minion_front.svg";
import minionBackImg from "../images/about_me/minion_back.svg";
import blobsImg from "../images/about_me/blobsGroup.svg";
import blobsIpadImg from "../images/about_me/blobsGroup-ipad.svg";
import phonesLargeImg from "../images/about_me/phones-large.svg";

function AboutMe() {
  useEffect(() => {
    gsap.from(".aboutMe__textWrapper", {
      y: -80,
      opacity: 0.4,
      duration: 1,
    });
    gsap.from("hr", {
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      width: 0,
    });
    gsap.from(".phonesIpadImg", {
      x: -125,
      duration: 1.5,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3,
    });
    gsap.from(".blobsIpadImg", {
      x: 125,
      duration: 1.5,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3,
    });
    gsap.from(".minion--front", {
      y: 20,
      duration: 1,
      ease: "bounce(0.1)",
    });
    gsap.from(".minion--back", {
      y: 20,
      duration: 1,
      ease: "bounce(0.1)",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMe__topImgContainer">
        <img className="phonesImg" src={phonesImg} alt="Phones" />
        <img className="phonesIpadImg" src={phonesLargeImg} alt="Phones" />
        <div className="rightImg">
          <img className="blobsImg" src={blobsImg} alt="computer and blobs" />
          <img
            className="blobsIpadImg"
            src={blobsIpadImg}
            alt="computer and blobs"
          />
        </div>
      </div>
      <div className="aboutMe__textWrapper">
        <div className="titleWrapper">
          <h1>Hi, I'm Fitri</h1>
          {/* <p>Software Developer + UI/UX Designer</p> */}
          <p>
            <TypeWriter
              options={{
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(100)
                  .typeString("Software Developer + UI/UX Designer")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </p>
          <hr />
        </div>
        <div className="description">
          <p>
            I am a tech-savvy, self-driven developer who loves to work on
            cutting-edge software technologies. I am currently a junior majoring
            in Computer Science at Wichita State University.
          </p>
        </div>
      </div>
      <img className="aboutMe__globeImg" src={globeImg} alt="globe" />
      <div className="aboutMe__bottomImgWrapper">
        <div className="aboutMe__minionsContainer">
          <img className="minion--front" src={minionFrontImg} alt="minion" />
          <img className="minion--back" src={minionBackImg} alt="minion" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
