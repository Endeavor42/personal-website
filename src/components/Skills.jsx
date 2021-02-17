import { Card, CardContent, CardMedia } from "@material-ui/core";
import "../styles/skills.scss";
import frontendCard from "../images/skills/frontend-card.svg";

import reactImg from "../images/skills/frontendCard/react.svg";
import typescriptImg from "../images/skills/frontendCard/typescript.svg";
import reduxImg from "../images/skills/frontendCard/redux.svg";
import javascriptImg from "../images/skills/frontendCard/javascript.svg";
import materialImg from "../images/skills/frontendCard/material-ui.svg";
import reactNativeImg from "../images/skills/frontendCard/react-native.svg";
import htmlImg from "../images/skills/frontendCard/html.svg";
import cssImg from "../images/skills/frontendCard/css.svg";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__tabWrapper">
        <p>Skills</p>
      </div>
      <div className="skills__cards">
        {/* Frontend Card */}
        <Card className="card">
          <CardMedia className="imgCover">
            <img src={frontendCard} alt="frontend" />
          </CardMedia>
          <CardContent className="cardContent">
            <div className="techRow">
              <div className="techItem">
                <img src={reactImg} alt="React" />
                <p>React</p>
              </div>
              <div className="techItem" style={{ marginRight: 5 }}>
                <img src={typescriptImg} alt="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div className="techItem">
                <img src={reduxImg} alt="Redux" />
                <p>Redux</p>
              </div>
            </div>
            <div className="techRow">
              <div className="techItem">
                <img src={javascriptImg} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="techItem" style={{ marginLeft: 5 }}>
                <img src={materialImg} alt="Material-UI" />
                <p>Material-UI</p>
              </div>
              <div className="techItem">
                <img src={reactNativeImg} alt="React Native" />
                <p>React Native</p>
              </div>
            </div>
            <div className="techRow">
              <div className="techItem">
                <img src={htmlImg} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="techItem">
                <img src={cssImg} alt="css" />
                <p>CSS</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Backend */}
        <Card className="card">
          <CardMedia className="imgCover">
            <img src={frontendCard} alt="frontend" />
          </CardMedia>
          <CardContent className="cardContent">
            <div className="techRow">
              <div className="techItem">
                <img src={reactImg} alt="React" />
                <p>React</p>
              </div>
              <div className="techItem" style={{ marginRight: 5 }}>
                <img src={typescriptImg} alt="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div className="techItem">
                <img src={reduxImg} alt="Redux" />
                <p>Redux</p>
              </div>
            </div>
            <div className="techRow">
              <div className="techItem">
                <img src={javascriptImg} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="techItem" style={{ marginLeft: 5 }}>
                <img src={materialImg} alt="Material-UI" />
                <p>Material-UI</p>
              </div>
              <div className="techItem">
                <img src={reactNativeImg} alt="React Native" />
                <p>React Native</p>
              </div>
            </div>
            <div className="techRow">
              <div className="techItem">
                <img src={htmlImg} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="techItem">
                <img src={cssImg} alt="css" />
                <p>CSS</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
