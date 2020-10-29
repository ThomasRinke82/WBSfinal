import React, { useRef } from "react";
import { connect } from "react-redux";
import domtoimage from "dom-to-image";
import "./EditDisplay.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const EditDisplay = ({
  bgData,
  templateData,
  teamHome,
  teamAway,
  scoreHome,
  scoreAway,
  iconHome,
  iconAway,
  updated,
}) => {
  let imageContainerRef = useRef(null);
  let resultContainerRef = useRef(null);

  const handleSaveAsImage = () => {
    const { current } = resultContainerRef;

    domtoimage
      .toPng(imageContainerRef.current)
      .then((dataUrl) => {
        let design = new Image();
        design.src = dataUrl;
        current.appendChild(design);
      })
      .catch((error) => {
        console.log("there is an error:", error);
      });
  };

  return (
    <div className="editDisplay">
      <div className="canvas" ref={imageContainerRef}>
        <div className=" bgData">
          <img id="bgData" src={bgData} style={{ height: 400 }} />
        </div>
        <div className="templateData">
          <img id="templateData" src={templateData} style={{ height: 400 }} />
        </div>
        <div className="teams">
          <h2 id="team-home">{teamHome}</h2>
          <h2 id="team-away">{teamAway}</h2>
        </div>
        <div className="scores">
          <h2 id="score-home">{scoreHome}</h2>
          <h2 id="score-away">{scoreAway}</h2>
        </div>
        <div className="icon-home">
          <img id="icon-home" src={iconHome} />
        </div>
        <div className="icon-away">
          <img id="icon-away" src={iconAway} />
        </div>
      </div>

      {updated ? (
        <div className="EditDisplayButtons">
          <ButtonGroup id="buttongroup" variant="contained" color="secondary">
            <Button onClick={handleSaveAsImage}>Save</Button>
            <Button>Share</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgData: state.backgroundImageData,
    templateData: state.templateData,
    teamHome: state.teamHome,
    teamAway: state.teamAway,
    scoreHome: state.scoreHome,
    scoreAway: state.scoreAway,
    iconHome: state.iconHome,
    iconAway: state.iconAway,
    updated: state.updated,
  };
};

export default connect(mapStateToProps)(EditDisplay);
