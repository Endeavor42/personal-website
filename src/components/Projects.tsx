import "../styles/projects.scss";
import natureImg from "../images/projects/nature.svg";
import roomImg from "../images/projects/room.svg";
import { Card, CardActions, CardMedia } from "@material-ui/core";
import mobileMockupImg from "../images/experience/mobileMockup.svg";
import websiteMockupImg from "../images/experience/websiteMockup.svg";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__tabWrapper">
        <p>Projects</p>
      </div>
      <img className="natureImg" src={natureImg} alt="Nature" />
      <img className="roomImg" src={roomImg} alt="Room" />
      <div className="projects__cards">
        <Card className="card">
          <CardMedia className="imgCover"></CardMedia>
          <CardActions className="cardFooter">
            <p>Gmail Clone</p>
          </CardActions>
        </Card>
        <Card className="card">
          <CardMedia className="imgCover"></CardMedia>
          <CardActions className="cardFooter">
            <p>Kingdom</p>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
