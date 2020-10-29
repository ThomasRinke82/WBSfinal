import React from "react";
import { connect } from "react-redux";
import Styles from "./EditDisplay.css";
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
  return (
    <div className="editDisplay">
      <div className="canvas">
        <div id="bgData">
          <img src={bgData} style={{ height: 400 }} />
        </div>
        <div id="templateData">
          <img src={templateData} style={{ height: 400 }} />
        </div>
        <div className="teams">
          <h2 id="team-home">{teamHome}</h2>
          <h2 id="team-away">{teamAway}</h2>
        </div>
        <div className="scores">
          <h2 id="score-home">{scoreHome}</h2>
          <h2 id="score-away">{scoreAway}</h2>
        </div>
        <div id="icon-home">
          <img src={iconHome} />
        </div>
        <div id="icon-away">
          <img src={iconAway} />
        </div>
      </div>
      <div className="EditDisplayButtons">
        {updated ? (
          <ButtonGroup variant="contained" color="secondary">
            <Button>Save</Button>
            <Button>Share</Button>
            <Button disabled>Delete</Button>
          </ButtonGroup>
        ) : null}
      </div>
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
