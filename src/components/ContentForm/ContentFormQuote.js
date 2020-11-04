import React from "react";
import "./ContentFormQuote.css";
import { setTeamName, setQuote, setPersonName } from "../Redux/Actions";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ChooseClubIcon from "../ChooseClubIcon/ChooseClubIcon";

const ContentFormQuote = ({ dispatch }) => {
  const changeHandler = (e) => {
    dispatch(setTeamName(e.target.value, e.target.name));
  };

  const changeQuote = (e) => {
    dispatch(setQuote(e.target.value, e.target.name));
  };

  const changeName = (e) => {
    dispatch(setPersonName(e.target.value, e.target.name));
  };

  return (
    <div className="contentform-quote">
      <div className="contentform-team-wrap">
        <div className="icon-wrap">
          <ChooseClubIcon name={"icon-home"} />
        </div>
        <div className="team-wrap">
          <TextField
            variant="outlined"
            label="Team Name"
            size="small"
            color="primary"
            name="team-home"
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="contentform-content-wrap">
        <div className="content-field">
          <TextField
            variant="outlined"
            label="Text"
            size="small"
            color="primary"
            name="quote"
            onChange={changeQuote}
          />
        </div>

        <div className="content-field">
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Name"
            size="small"
            color="primary"
            name="name"
            onChange={changeName}
          />
        </div>
      </div>
    </div>
  );
};

export default connect()(ContentFormQuote);
