import React from "react";
import "./Background.css";
import ImageGenerator from "../ImageGenerator/ImageGenerator";
import UploadImage from "../UploadImage/UploadImage";
import EditDisplay from "../EditDisplay/EditDisplay";

function Background() {
  return (
    <div className="designs-layout">
      <EditDisplay />
      <div className="upload-section">
        <UploadImage />
        <ImageGenerator />
      </div>
    </div>
  );
}

export default Background;
