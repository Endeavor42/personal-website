import "../styles/aboutMe.scss";
import hamburgerIcon from "../images/about_me/hamburger.svg";
import phonesIcon from "../images/about_me/phones.svg";
import downloadIcon from "../images/about_me/download.svg";
import computerIcon from "../images/about_me/computer.svg";
import blob1Icon from "../images/about_me/blob1.svg";
import blob2Icon from "../images/about_me/blob2.svg";
import globeIcon from "../images/about_me/globe.svg";
import minionFrontIcon from "../images/about_me/minion_front.svg";
import minionBackIcon from "../images/about_me/minion_back.svg";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__navbar">
        <div className="aboutMe__container">
          <img src={hamburgerIcon} alt="Hamburger Icon" />
          <a href="../Fitri_Rozi_Resume.pdf" download>
            <img src={downloadIcon} alt="Download resume" />
            <span>Resume</span>
          </a>
        </div>
      </div>
      <img className="aboutMe__phonesIcon" src={phonesIcon} alt="Phones" />
      <div className="aboutMe__rightImg">
        <img className="blob1" src={blob1Icon} alt="blob" />
        <img className="computerIcon" src={computerIcon} alt="Computer" />
        <img className="blob2" src={blob2Icon} alt="blob" />
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
      <div className="aboutMe__bottomImgWrapper">
        <img className="aboutMe__globeIcon" src={globeIcon} alt="globe" />
        <img
          className="aboutMe__minion--front"
          src={minionFrontIcon}
          alt="minion"
        />
        <img
          className="aboutMe__minion--back"
          src={minionBackIcon}
          alt="minion"
        />
      </div>
    </div>
  );
}

export default AboutMe;
