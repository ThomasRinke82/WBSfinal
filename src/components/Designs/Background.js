import React from "react";
import Styles from "./DesignsStyle.css";
import ImageGenerator from "../ImageGenerator";
import UploadImage from "../UploadImage";
import EditDisplay from "../EditDisplay";

function Background() {
  return (
    <div className="DesignsLayout">
      <EditDisplay />
      <UploadImage />
      <ImageGenerator />
    </div>
  );
}

export default Background;