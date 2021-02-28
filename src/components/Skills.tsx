import { Card, CardContent, CardMedia } from "@material-ui/core";
import "../styles/skills.scss";
import frontendCard from "../images/skills/frontend-card.svg";
import backendCard from "../images/skills/backend-card.svg";
import toolsCard from "../images/skills/tools-card.svg";
import designCard from "../images/skills/design-card.svg";
import cloudCard from "../images/skills/cloud-card.svg";
// Frontend imports
import reactImg from "../images/skills/frontendCard/react.svg";
import typescriptImg from "../images/skills/frontendCard/typescript.svg";
import reduxImg from "../images/skills/frontendCard/redux.svg";
import javascriptImg from "../images/skills/frontendCard/javascript.svg";
import materialImg from "../images/skills/frontendCard/material-ui.svg";
import reactNativeImg from "../images/skills/frontendCard/react-native.svg";
import htmlImg from "../images/skills/frontendCard/html.svg";
import cssImg from "../images/skills/frontendCard/css.svg";
// Backend icon imports
import apolloImg from "../images/skills/backendCard/apollo.svg";
import djangoImg from "../images/skills/backendCard/django.svg";
import dockerImg from "../images/skills/backendCard/docker.svg";
import expressImg from "../images/skills/backendCard/express.svg";
import graphqlImg from "../images/skills/backendCard/graphql.svg";
import mongodbImg from "../images/skills/backendCard/mongodb.svg";
import nodejsImg from "../images/skills/backendCard/nodejs.svg";
import postgresqlImg from "../images/skills/backendCard/postgresql.svg";
import pythonImg from "../images/skills/backendCard/python.svg";
// Tools icon imports
import atlassianImg from "../images/skills/toolsCard/atlassian.svg";
import bitbucketImg from "../images/skills/toolsCard/bitbucket.svg";
import gitImg from "../images/skills/toolsCard/git.svg";
import githubImg from "../images/skills/toolsCard/github.svg";
import linuxImg from "../images/skills/toolsCard/linux.svg";
import postmanImg from "../images/skills/toolsCard/postman.svg";
import vimImg from "../images/skills/toolsCard/vim.svg";
import vscodeImg from "../images/skills/toolsCard/vscode.svg";
// Design icon imports
import figmaImg from "../images/skills/designCard/figma.svg";
import adobexdImg from "../images/skills/designCard/adobexd.svg";
// Cloud icon imports
import firebaseImg from "../images/skills/cloudCard/firebase.svg";
import azureImg from "../images/skills/cloudCard/azure.svg";
import stripeImg from "../images/skills/cloudCard/stripe.svg";

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
          <CardContent className="cardCenter">
            <div className="cardContent">
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
            </div>
          </CardContent>
        </Card>
        {/* Backend */}
        <Card className="card">
          <CardMedia className="imgCover">
            <img src={backendCard} alt="frontend" />
          </CardMedia>
          <CardContent className="cardCenter">
            <div className="cardContent">
              <div className="techRow">
                <div className="techItem">
                  <img src={graphqlImg} alt="GraphQL" />
                  <p>GraphQL</p>
                </div>
                <div className="techItem">
                  <img src={nodejsImg} alt="NodeJS" />
                  <p>NodeJS</p>
                </div>
                <div className="techItem">
                  <img src={mongodbImg} alt="MongoDB" />
                  <p>MongoDB</p>
                </div>
              </div>
              <div className="techRow">
                <div className="techItem">
                  <img src={postgresqlImg} alt="PostgreSQL" />
                  <p>JavaScript</p>
                </div>
                <div className="techItem" style={{ marginRight: 5 }}>
                  <img src={djangoImg} alt="Django" />
                  <p>Django</p>
                </div>
                <div className="techItem">
                  <img src={expressImg} alt="ExpressJS" />
                  <p>ExpressJS</p>
                </div>
              </div>
              <div className="techRow">
                <div className="techItem">
                  <img src={apolloImg} alt="Apollo" />
                  <p>Apollo</p>
                </div>
                <div className="techItem">
                  <img src={pythonImg} alt="Python" />
                  <p>Python</p>
                </div>
                <div className="techItem">
                  <img src={dockerImg} alt="Docker" />
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Tools */}
        <Card className="card">
          <CardMedia className="imgCover">
            <img src={toolsCard} alt="frontend" />
          </CardMedia>
          <CardContent className="cardCenter">
            <div className="cardContent">
              <div className="techRow">
                <div className="techItem">
                  <img src={gitImg} alt="Git" />
                  <p>Git</p>
                </div>
                <div className="techItem">
                  <img src={githubImg} alt="Github" />
                  <p>Github</p>
                </div>
                <div className="techItem">
                  <img src={bitbucketImg} alt="Bitbucket" />
                  <p>Redux</p>
                </div>
              </div>
              <div className="techRow" style={{ width: "85%" }}>
                <div className="techItem">
                  <img src={linuxImg} alt="Linux" />
                  <p>Linux</p>
                </div>
                <div className="techItem">
                  <img src={vscodeImg} alt="VSCode" />
                  <p>VSCode</p>
                </div>
                <div className="techItem">
                  <img src={vimImg} alt="Vim" />
                  <p>Vim</p>
                </div>
              </div>
              <div className="techRow">
                <div className="techItem">
                  <img src={atlassianImg} alt="Atlassian" />
                  <p>Atlassian</p>
                </div>
                <div className="techItem">
                  <img src={postmanImg} alt="Postman" />
                  <p>Postman</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Design */}
        <Card className="card">
          <CardMedia className="imgCover">
            <img src={designCard} alt="frontend" />
          </CardMedia>
          <CardContent className="cardCenter">
            <div className="cardContent">
              <div className="techRow">
                <div className="techItem">
                  <img src={figmaImg} alt="Figma" />
                  <p>Figma</p>
                </div>
                <div className="techItem">
                  <img src={adobexdImg} alt="Adobe XD" />
                  <p>Adobe XD</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Cloud */}
        <Card className="card">
          <CardMedia className="imgCover">
            <img src={cloudCard} alt="Cloud" />
          </CardMedia>
          <CardContent className="cardCenter">
            <div className="cardContent">
              <div className="techRow">
                <div className="techItem">
                  <img src={firebaseImg} alt="firebase" />
                  <p>Firebase</p>
                </div>
                <div className="techItem">
                  <img src={azureImg} alt="Azure" />
                  <p>TypeScript</p>
                </div>
                <div className="techItem">
                  <img src={stripeImg} alt="Stripe" />
                  <p>Stripe</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
