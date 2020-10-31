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
  fileUrl,
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

          console.log(snapshot);
        });
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="editDisplay">
      <div className="canvas" ref={imageContainerRef}>
        <div className="bgData">
          <img id="bgData" src={bgData} alt="" />
        </div>
        <div className="templateData">
          <img id="templateData" src={templateData} alt="" />
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
          <img id="icon-home" src={iconHome} alt="" />
        </div>
        <div className="icon-away">
          <img id="icon-away" src={iconAway} alt="" />
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
    fileUrl: state.fileUrl,
  };
};

export default connect(mapStateToProps)(EditDisplay);
