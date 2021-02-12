import "../styles/aboutMe.scss";
import hamburgerIcon from "../images/about_me/hamburger.svg";
import downloadIcon from "../images/about_me/download.svg";
import phonesIcon from "../images/about_me/phones.svg";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__navbar">
        <div className="aboutMe__container">
          <img src={hamburgerIcon} alt="hamburger Icon" />
          <a href="../Fitri_Rozi_Resume.pdf" download>
            <img src={downloadIcon} alt="Download resume" />
            <span>Resume</span>
          </a>
        </div>
      </div>
      <img src={phonesIcon} alt="phones" />
    </div>
  );
}

export default AboutMe;
