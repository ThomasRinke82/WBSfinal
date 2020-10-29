import React from "react";
import "./Content.css";
import EditDisplay from "../EditDisplay/EditDisplay";
import ContentForm from "../ContentForm/ContentForm";

function Content() {
  return (
    <div className="ContentDesign">
      <EditDisplay />
      <ContentForm />
    </div>
  );
}

export default Content;
