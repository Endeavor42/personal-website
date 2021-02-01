import "../../styles/info.css";
import personQuotes from "../../images/person_quotes.svg";

function Info() {
  return (
    <div className="info">
      <div className="info__left">
        <h1>Hi, I'm Fitri</h1>
        <p className="info__subtitle">Software Developer + UI/UX Designer</p>
        <hr />
        <p className="info__description">
          I am a tech-savy, self-driven developer who loves to work on
          cutting-edge software technologies. I am currently a junior majoring
          in Computer Science at Wichita State University.
        </p>
        <hr />
        <div className="info__buttons">
          <p>My Story</p>
          <p>About the Quote</p>
        </div>
      </div>
      <img src={personQuotes} alt="About me" />
    </div>
  );
}

export default Info;
