import React from "react";
import useFirestore from "./Hooks/useFirestore";
import { connect } from "react-redux";
import { setTemplate } from "./Redux/Actions";
import Style from "./TemplateGrid.css";

const TemplateGrid = ({ dispatch }) => {
  const { docs } = useFirestore("templates");

  const clickHandler = (e) => {
    dispatch(setTemplate(e.target.src));
  };

  return (
    // map through the template collection and display them
    <div className="temp-grid">
      {docs
        ? docs.map((doc) => (
            <div className="temp-wrap" key={doc.id}>
              <img src={doc.url} alt={doc.name} onClick={clickHandler} />
            </div>
          ))
        : "wait"}
    </div>
  );
};

export default connect()(TemplateGrid);
