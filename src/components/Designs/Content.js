import React from "react";
import Styles from "./DesignsStyle.css";
import EditDisplay from "../EditDisplay";
import ContentForm from "./ContentForm";

function Content() {
  return (
    <div className="ContentDesign">
      <EditDisplay />
      <ContentForm />
    </div>
  );
}

export default Content;
