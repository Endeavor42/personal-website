import "../styles/navbar.scss";
import hamburgerIcon from "../images/navbar/hamburger.svg";
import downloadImg from "../images/navbar/download.svg";
import hightlightTags from "../images/navbar/highlight-tags.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <ul className="navbar__links">
          <li>
            <p>About me</p>
            <div className="tagsWrapper">
              <div className="item tag1"></div>
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
          <li>
            Experience
            <div className="tagsWrapper">
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
          <li>
            Skills
            <div className="tagsWrapper">
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
          <li>
            Projects
            <div className="tagsWrapper">
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
        </ul>
        <img src={hamburgerIcon} alt="Hamburger Icon" />
        <a href="../Fitri_Rozi_Resume.pdf" download>
          <img src={downloadImg} alt="Download resume" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
