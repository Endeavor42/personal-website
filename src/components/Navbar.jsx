import { useState } from "react";
import "../styles/navbar.scss";
import hamburgerIcon from "../images/navbar/hamburger.svg";
import downloadImg from "../images/navbar/download.svg";
import { Link } from "react-scroll";

function Navbar() {
  const [active, setActive] = useState("About me");

  const handleSetActive = (e) => {
    setActive(e.target.innerText);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <ul className="navbar__links">
          <Link
            activeClass="active"
            to="aboutMe"
            spy={true}
            duration={500}
            smooth={true}
            offset={-100}
            onClick={handleSetActive}
          >
            <p
              style={
                active === "About me"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              About me
            </p>
            <div
              style={
                active === "About me"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1"></div>
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            duration={500}
            smooth={true}
            onClick={handleSetActive}
            offset={-100}
          >
            <p
              style={
                active === "Experience"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              Experience
            </p>
            <div
              style={
                active === "Experience"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            duration={500}
            smooth={true}
            onClick={handleSetActive}
            offset={-75}
          >
            <p
              style={
                active === "Skills"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              Skills
            </p>
            <div
              style={
                active === "Skills"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            duration={500}
            smooth={true}
            onClick={handleSetActive}
            offset={-125}
          >
            <p
              style={
                active === "Projects"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              Projects
            </p>
            <div
              style={
                active === "Projects"
                  ? { visibility: "visible", textDecoration: "none" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </Link>
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
