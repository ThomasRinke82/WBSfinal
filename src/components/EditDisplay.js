import React from "react";
import { connect } from "react-redux";
import Styles from "./EditDisplay.css";

const EditDisplay = ({ bgData, themeData }) => {
  return (
    <div className="EditDisplay">
      <div className="EditDisplayButtons">
        <button>Save</button>
        <button>Share</button>
        <button>Delete</button>
      </div>
      <img src={bgData} style={{ height: 300 }} />
      <img src={themeData} style={{ height: 300 }} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgData: state.backgroundImageData,
    themeData: state.templateData,
  };
};

export default connect(mapStateToProps)(EditDisplay);
