import React from "react";
import "./ContentForm.css";
import { setTeamName, setScore } from "../Redux/Actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ChooseClubIcon from "../ChooseClubIcon/ChooseClubIcon";

const ContentFormTeams = ({ dispatch }) => {
  const changeHandler = (e) => {
    dispatch(setTeamName(e.target.value, e.target.name));
    dispatch(setScore(e.target.value, e.target.name));
  };
  return (
    <div className="contentform-teams">
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

export default connect()(ContentFormTeams);
