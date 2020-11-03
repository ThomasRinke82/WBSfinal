import React, { useRef } from "react";
import { connect } from "react-redux";
//import domtoimage from "dom-to-image";
import { toPng } from "html-to-image";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { v4 as uuidv4 } from "uuid";
import { setDelete } from "../Redux/Actions";
import ResultTemplate from "../TemplateComponents/ResultTemplate";
import QuoteTemplate from "../TemplateComponents/QuoteTemplate";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../Firebase/config";

import "./EditDisplay.css";

const EditDisplay = ({ bgData, templateData, updated, dispatch }) => {
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
              .orderBy("createdAt", "desc")
              .catch((e) => console.error(e));
          });
        });
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const handleDelete = () => {
    dispatch(setDelete());
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
        {/*<ResultTemplate*/}
        <QuoteTemplate />
      </div>

      {updated ? (
        <div className="EditDisplayButtons">
          <ButtonGroup id="buttongroup" variant="contained" color="secondary">
            <Button onClick={handleSaveAsImage}>Save</Button>
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
    updated: state.updated,
  };
};

export default connect(mapStateToProps)(EditDisplay);
