import React from "react";
import "./Content.css";
import EditDisplay from "../EditDisplay/EditDisplay";
import ContentFormTeams from "../ContentForm/ContentFormTeams";
import ContentFormLeague from "../ContentForm/ContentFormLeague";

function Content() {
  return (
    <div className="content-design">
      <EditDisplay />
      <div className="forms">
        <ContentFormLeague />
        <ContentFormTeams />
      </div>
    </div>
  );
}

export default Content;
