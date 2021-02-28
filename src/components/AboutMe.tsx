import "../styles/aboutMe.scss";
import phonesImg from "../images/about_me/phones.svg";
import globeImg from "../images/about_me/globe.svg";
import minionFrontImg from "../images/about_me/minion_front.svg";
import minionBackImg from "../images/about_me/minion_back.svg";
import blobsImg from "../images/about_me/blobsGroup.svg";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__topImgContainer">
        <img className="phonesImg" src={phonesImg} alt="Phones" />
        <div className="rightImg">
          <img src={blobsImg} alt="computer and blobs" />
        </div>
      </div>
      <div className="aboutMe__textWrapper">
        <div className="titleWrapper">
          <h1>Hi, I'm Fitri</h1>
          <p>Software Developer + UI/UX Designer</p>
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
