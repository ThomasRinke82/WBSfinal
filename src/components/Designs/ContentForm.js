import React from "react";
import Styles from "./DesignsStyle.css";
import { setTeamName, setScore } from "../Redux/Actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ChooseClubIcon from "./ChooseClubIcon";

const ContentForm = ({ dispatch }) => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    dispatch(setTeamName(e.target.value, e.target.name));
    dispatch(setScore(e.target.value, e.target.name));
  };
  return (
    <div className="ContentForm">
      <form>
        <div className="icon-wrap">
          <ChooseClubIcon name={"icon-home"} />
          <ChooseClubIcon name={"icon-away"} />
        </div>
        <div className="team-wrap">
          <TextField
            variant="outlined"
            label="TeamHome"
            size="small"
            color="primary"
            name="team-home"
            onChange={changeHandler}
          />{" "}
          <TextField
            variant="outlined"
            label="TeamAway"
            size="small"
            color="primary"
            name="team-away"
            onChange={changeHandler}
          />
        </div>
        <div className="result-wrap">
          <TextField
            variant="outlined"
            placeholder="Score"
            size="small"
            color="primary"
            name="score-home"
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            placeholder="Score"
            size="small"
            color="primary"
            name="score-away"
            onChange={changeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default connect()(ContentForm);
