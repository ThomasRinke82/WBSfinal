import React from "react";
import Styles from "./ThemesStyle.css";
import UploadForms from "../UploadForms";
import ImageGenerator from "../ImageGenerator";

function Result() {
  return (
    <div className="ThemesResult">
      <UploadForms />
      <ImageGenerator />
    </div>
  );
}

export default Result;
