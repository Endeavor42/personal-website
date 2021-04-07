import "../styles/experience.scss";
import Card from "@material-ui/core/Card";
import { CardActions, CardMedia } from "@material-ui/core";
import mobileMockupImg from "../images/experience/mobileMockup.svg";
import websiteMockupImg from "../images/experience/websiteMockup.svg";
import dudeImg from "../images/experience/dude.svg";

function Experience() {
  return (
    <div className="experience" id="experience">
      {/* Tab */}
      <div className="experience__tabWrapper">
        <p>Experience</p>
      </div>
      <div className="experience__container">
        {/* First job experience */}
        <div className="experience__row1">
          {/* Image */}
          <div className="experience__dude">
            <img src={dudeImg} alt="Dude" />
          </div>
          {/* Description */}
          <div className="experience__description--first">
            <div className="experience__jobTitleWrapper--first">
              <div className="companyAndTimeline">
                <h3>NetApp</h3>
                <p className="timeline" style={{ marginBottom: -3 }}>
                  September 2020 - Present
                </p>
              </div>
              <p className="jobPosition">Full Stack Developer Intern</p>
            </div>
            <ul>
              <li>
                Transitioned the company from using JQuery to React, a simple,
                fast, and scalable frontend library
              </li>
              <li>
                Used Authorization Code Flow to solve an authentication issue
                that the backend team was facing with Azure, saving 6 weeks of
                work
              </li>
              <li>
                Integrated React and Django to enable frontend and backend
                communication
              </li>
              <li>
                Wrote code that fetched JWT from Django API and then decoded it
                to obtain user’s information
              </li>
              <li>
                Used Docker to containerize React for development and deployment
              </li>
              <li>
                Gained mastery of Git, BitBucket, Atlassian, and other project
                management and collaboration tools
              </li>
            </ul>
          </div>
        </div>
        {/* Second job experience */}
        <div className="experience__row2">
          <div className="experience__description--second">
            <div className="experience__jobTitleWrapper--second">
              <div className="companyAndTimeline">
                <h3>Sensor Dynamix</h3>
                <p className="timeline">May 2020 - August 2020</p>
              </div>
              <p className="jobPosition">
                Software Engineer & UI/UX Designer Intern
              </p>
            </div>
            <ul>
              <li>
                Implemented Context API to reduce the number of requests made to
                the database by 87%-93%
              </li>
              <li>
                Developed a login page with React Native and validated user
                inputs with RegEx
              </li>
              <li>
                Set up Stripe to securely accept online payments, manage
                customer activities, and handle recurring subscriptions
              </li>
              <li>
                Used OAuth and Firebase Authentication to allow users to sign in
                with their Google account
              </li>
              <li>
                Responsible for designing both mobile app and website using
                Adobe XD
              </li>
            </ul>
          </div>
          <div className="experience__cards">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://xd.adobe.com/view/6c6b2732-ee16-4dfb-aff8-026d25231d2f-3938/
"
            >
              <Card className="card">
                <CardMedia className="imgCover">
                  <img src={mobileMockupImg} alt="Mobile Mockup" />
                </CardMedia>
                <CardActions className="cardFooter">
                  <p>Mobile Mockup</p>
                </CardActions>
              </Card>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://xd.adobe.com/view/4061448c-8e8b-4352-8657-0d6573552a15-1532/"
            >
              <Card className="card">
                <CardMedia className="imgCover">
                  <img
                    className="second"
                    src={websiteMockupImg}
                    alt="Website Mockup"
                  />
                </CardMedia>
                <CardActions className="cardFooter">
                  <p>Website Mockup</p>
                </CardActions>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
