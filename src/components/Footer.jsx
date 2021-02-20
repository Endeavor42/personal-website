import "../styles/footer.scss";
import linkedInLogo from "../images/footer/linkedin.svg";
import githubLogo from "../images/footer/github.svg";
import gmailLogo from "../images/footer/gmail.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <p>Thank you for viewing my website!</p>
        <div className="connectionIcons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/fitri-rozi-7b4180179"
          >
            <img src={linkedInLogo} alt="LinkedIn" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Endeavor42"
          >
            <img src={githubLogo} alt="github" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:fitrirozi1@gmail.com"
          >
            <img src={gmailLogo} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
