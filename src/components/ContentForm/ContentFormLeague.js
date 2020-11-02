import React from "react";
import "./ContentForm.css";
import { setLeague, setMatchday } from "../Redux/Actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

const ContentFormLeague = ({ dispatch }) => {
  const changeLeague = (e) => {
    dispatch(setLeague(e.target.value, e.target.name));
  };

  const changeMatchday = (e) => {
    dispatch(setMatchday(e.target.value, e.target.name));
  };
  return (
    <div className="contentform-league">
      <form>
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
      </form>
    </div>
  );
};

export default connect()(ContentFormLeague);
