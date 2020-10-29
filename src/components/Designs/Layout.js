import React from "react";
import Styles from "./DesignsStyle.css";
import EditDisplay from "../EditDisplay";
import TemplateGrid from "../TemplateGrid";

function Layout() {
  return (
    <div className="BackgroundDesign">
      <EditDisplay />
      <TemplateGrid />
      <div className="TemplateCollection">
        <h4>Choose your Template</h4>
        <select name="templates" id="templates">
          <option value="" disabled selected>
            Select Template
          </option>
          <option value="result">Result</option>
          <option value="preview">Preview</option>
          <option value="playerProfile">Player Profile</option>
          <option value="quote">Quote</option>
        </select>
      </div>
    </div>
  );
}

export default Layout;
