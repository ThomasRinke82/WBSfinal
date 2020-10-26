import React from "react";
import Styles from "./DesignsStyle.css";
import EditDisplay from "../EditDisplay";

function Layout() {
  return (
    <div className="BackgroundDesign">
      <EditDisplay />
      <div className="TemplateCollection">
        <h4>Selection of templates coming from backend database</h4>
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