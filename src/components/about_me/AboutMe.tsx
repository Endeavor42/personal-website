import Header from "./Header";
import "../../styles/aboutMe.css";
import Info from "./Info";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="container">
        <Header />
        <Info />
      </div>
    </div>
  );
}

export default AboutMe;
