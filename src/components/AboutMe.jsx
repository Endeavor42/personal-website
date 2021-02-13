import "../styles/aboutMe.scss";
import hamburgerIcon from "../images/about_me/hamburger.svg";
import phonesIcon from "../images/about_me/phones.svg";
import downloadIcon from "../images/about_me/download.svg";
import computerIcon from "../images/about_me/computer.svg";
import blob1Icon from "../images/about_me/blob1.svg";
import blob2Icon from "../images/about_me/blob2.svg";

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
    </div>
  );
}

export default AboutMe;
