import "../styles/navbar.scss";
import hamburgerIcon from "../images/about_me/hamburger.svg";
import downloadImg from "../images/about_me/download.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
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
