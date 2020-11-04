import React from "react";
import "./Layout.css";
import EditDisplay from "../EditDisplay/EditDisplay";
import TemplateGrid from "../TemplateGrid/TemplateGrid";

function Layout() {
  return (
    <div className="BackgroundDesign">
      <EditDisplay />
      <TemplateGrid />
    </div>
  );
}

export default Layout;
