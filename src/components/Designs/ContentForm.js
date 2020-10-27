import React from "react";
import Styles from "./DesignsStyle.css";

const ContentForm = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
  };
  return (
    <div className="ContentForm">
      <form>
        <div className="icon-wrap">
          Icons:
          <input type="file" name="icon-home" />
          <input type="file" name="icon-away" />
        </div>
        <div className="team-wrap">
          <input
            type="text"
            name="team-home"
            placeholder="team home"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="team-away"
            placeholder="team away"
            onChange={changeHandler}
          />
        </div>
        <div className="result-wrap">
          <input
            type="text"
            name="result-home"
            placeholder="score"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="result-away"
            placeholder="score"
            onChange={changeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default ContentForm;
