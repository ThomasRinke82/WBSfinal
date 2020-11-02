import React, { useRef } from "react";
import { connect } from "react-redux";
//import domtoimage from "dom-to-image";
import { toPng } from "html-to-image";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { v4 as uuidv4 } from "uuid";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../Firebase/config";

import "./EditDisplay.css";

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
  initialState,
  league,
  matchday,
}) => {
  let imageContainerRef = useRef(null);

  const handleSaveAsImage = async () => {
    toPng(imageContainerRef.current)
      .then((dataUrl) => {
        let ref = projectStorage.ref().child(uuidv4());

        ref.putString(dataUrl, "data_url").then((snapshot) => {
          ref.getDownloadURL().then((value) => {
            projectFirestore
              .collection("images")
              .add({
                createdAt: timestamp,
                url: value,
              })
              .then((docref) => console.log("all good"))
              .catch((e) => console.error(e));
          });
        });
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const handleDelete = () => {};

  return (
    <div className="editDisplay">
      <div className="canvas" ref={imageContainerRef}>
        <div className="league-info">
          <h1 id="league">{league}</h1>
          <h1 id="matchday">{matchday}</h1>
        </div>
        <div className="bgData">
          <img id="bgData" src={bgData} alt="" />
        </div>
        <div className="templateData">
          <img id="templateData" src={templateData} alt="" />
        </div>
        <div className="home">
          <h2 id="team-home">{teamHome}</h2>
          <div className="icon-home">
            <img id="icon-home" src={iconHome} alt="" />
          </div>
          <h2 id="score-home">{scoreHome}</h2>
        </div>
        <div className="away">
          <h2 id="team-away">{teamAway}</h2>
          <div className="icon-away">
            <img id="icon-away" src={iconAway} alt="" />
          </div>
          <h2 id="score-away">{scoreAway}</h2>
        </div>
      </div>

      {updated ? (
        <div className="EditDisplayButtons">
          <ButtonGroup id="buttongroup" variant="contained" color="secondary">
            <Button onClick={handleSaveAsImage}>Save</Button>
            <Button>Share</Button>
            <Button onClick={handleDelete}>Delete</Button>
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
    fileUrl: state.fileUrl,
    initialState: state.initialState,
    league: state.league,
    matchday: state.matchday,
  };
};

export default connect(mapStateToProps)(EditDisplay);
