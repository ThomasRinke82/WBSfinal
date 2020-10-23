import React from "react";
import Styles from "./ThemesStyle.css";
import UploadForms from "../UploadForms";
import ImageGenerator from "../ImageGenerator";
import UploadImage from "../UploadImage";
import EditDisplay from "../EditDisplay";
import EditNavbar from "../EditNavbar";

function Result() {
  return (
    <div className="ThemesResult">
      <EditDisplay />
      <EditNavbar />
      <UploadImage />
      <ImageGenerator />
    </div>
  );
}

export default Result;
