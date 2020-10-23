import React from "react";
import Styles from "./DesignsStyle.css";
import UploadForms from "../UploadForms";
import ImageGenerator from "../ImageGenerator";
import UploadImage from "../UploadImage";
import EditDisplay from "../EditDisplay";

function Layout() {
  return (
    <div className="DesignsLayout">
      <EditDisplay />
      <UploadImage />
      <ImageGenerator />
    </div>
  );
}

export default Layout;
