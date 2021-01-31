import "../styles/header.css";
import downloadIcon from "../images/download_icon.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <p>About me</p>
        <p>Experience</p>
        <p>Skills</p>
        <p>Projects</p>
      </div>
      <div className="header__right">
        <img src={downloadIcon} alt="Download Icon" />
        <p>Resume</p>
      </div>
    </div>
  );
}

export default Header;
