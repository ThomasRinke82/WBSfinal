import React from "react";
import { connect } from "react-redux";
import Styles from "./EditDisplay.css";

const EditDisplay = ({ bgData }) => {
  return (
    <div className="EditDisplay">
      <div className="EditDisplayButtons">
        <button>Save</button>
        <button>Share</button>
        <button>Delete</button>
      </div>
      <img src={bgData} style={{ height: 300 }} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgData: state.backgroundImageData,
  };
};

export default connect(mapStateToProps)(EditDisplay);
