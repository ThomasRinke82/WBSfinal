import React from "react";
import "./ContentForm.css";
import {
  setLeague,
  setMatchday,
  setLocation,
  setQuote,
  setPersonName,
} from "../Redux/Actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

const ContentFormLeague = ({ dispatch }) => {
  const changeLeague = (e) => {
    dispatch(setLeague(e.target.value, e.target.name));
  };

  const changeMatchday = (e) => {
    dispatch(setMatchday(e.target.value, e.target.name));
  };

  const changeLocation = (e) => {
    dispatch(setLocation(e.target.value, e.target.name));
  };

  const changeQuote = (e) => {
    dispatch(setQuote(e.target.value, e.target.name));
  };

  const changeName = (e) => {
    dispatch(setPersonName(e.target.value, e.target.name));
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

        <div>
          <TextField
            variant="outlined"
            label="Quote"
            size="small"
            color="primary"
            name="quote"
            onChange={changeQuote}
          />
        </div>

        <div>
          <TextField
            variant="outlined"
            label="Name"
            size="small"
            color="primary"
            name="name"
            onChange={changeName}
          />
        </div>
      </form>
    </div>
  );
};

export default connect()(ContentFormLeague);
