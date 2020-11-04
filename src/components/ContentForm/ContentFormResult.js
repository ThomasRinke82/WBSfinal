import React from "react";
import "./ContentFormResult.css";
import {
  setTeamName,
  setScore,
  setLeague,
  setMatchday,
  setLocation,
} from "../Redux/Actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import ChooseClubIcon from "../ChooseClubIcon/ChooseClubIcon";

const ContentFormResult = ({ dispatch, activeTemplate }) => {
  const changeHandler = (e) => {
    dispatch(setTeamName(e.target.value, e.target.name));
    dispatch(setScore(e.target.value, e.target.name));
  };

  const changeLeague = (e) => {
    dispatch(setLeague(e.target.value, e.target.name));
  };

  const changeMatchday = (e) => {
    dispatch(setMatchday(e.target.value, e.target.name));
  };

  const changeLocation = (e) => {
    dispatch(setLocation(e.target.value, e.target.name));
  };

  return (
    <div className="contentform-result">
      <div className="result-league-info">
        <div>
          <TextField
            variant="outlined"
            label="League"
            size="small"
            color="primary"
            name="league"
            onChange={changeLeague}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            label="Matchday"
            size="small"
            color="primary"
            name="matchday"
            onChange={changeMatchday}
          />
        </div>

        <div>
          <TextField
            variant="outlined"
            label="Location"
            size="small"
            color="primary"
            name="location"
            onChange={changeLocation}
          />
        </div>
      </div>
      <div className="result-team-info">
        <div className="result-home">
          <ChooseClubIcon name={"icon-home"} />
          <TextField
            variant="outlined"
            label="TeamHome"
            size="small"
            color="primary"
            name="team-home"
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            placeholder="Score"
            size="small"
            color="primary"
            name="score-home"
            onChange={changeHandler}
          />
        </div>

        <div className="result-away">
          <ChooseClubIcon name={"icon-away"} />
          <TextField
            variant="outlined"
            label="TeamAway"
            size="small"
            color="primary"
            name="team-away"
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
      </div>
    </div>
  );
};

export default connect()(ContentFormResult);
