import { useState } from "react";
import "../styles/navbar.scss";
import hamburgerIcon from "../images/navbar/hamburger.svg";
import downloadImg from "../images/navbar/download.svg";

function Navbar() {
  const [linkState, setLinkState] = useState("about me");

  return (
    <div className="navbar">
      <div className="navbar__container">
        <ul className="navbar__links">
          <li onClick={() => setLinkState("about me")}>
            {
              <p
                style={
                  linkState === "about me"
                    ? { color: "white", textDecoration: "none" }
                    : { color: "black" }
                }
              >
                About me
              </p>
            }
            <div
              style={
                linkState === "about me"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1"></div>
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
          <li onClick={() => setLinkState("experience")}>
            <p
              style={
                linkState === "experience"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              Experience
            </p>
            <div
              style={
                linkState === "experience"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
          <li onClick={() => setLinkState("skills")}>
            <p
              style={
                linkState === "skills"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              Skills
            </p>
            <div
              style={
                linkState === "skills"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
              <div className="item tag1" />
              <div className="item tag2" />
              <div className="item tag3" />
            </div>
          </li>
          <li onClick={() => setLinkState("projects")}>
            <p
              style={
                linkState === "projects"
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black" }
              }
            >
              Projects
            </p>
            <div
              style={
                linkState === "projects"
                  ? { visibility: "visible", textDecoration: "none" }
                  : { visibility: "hidden" }
              }
              className="tagsWrapper"
            >
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
