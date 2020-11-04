import React from "react";
import { connect } from "react-redux";
import { setActiveTemplate } from "../Redux/Actions";

import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import "./SelectTemplate.css";

const useStyles = makeStyles((theme) => ({
  select: {
    backgroundColor: "#5effac",
    color: "#0c343f",
    width: "200px",
    marginTop: "",
  },
  whateverIWant: {
    marginTop: "20px",
    color: "#0c343f",
  },
}));

const SelectTemplates = ({ dispatch }) => {
  const classes = useStyles();
  const handleActiveTemplate = (e) => {
    dispatch(setActiveTemplate(e.target.value));
  };

  return (
    <div>
      <FormControl className={classes.whateverIWant} variant="outlined">
        <InputLabel id="demo-simple-select-required-label">
          What do you want?
        </InputLabel>
        <Select
          className={classes.select}
          name="template"
          id="template"
          value=""
          onChange={handleActiveTemplate}
        >
          <MenuItem value="">
            <em>Template</em>
          </MenuItem>
          <MenuItem value="result" name="result">
            Result Image
          </MenuItem>
          <MenuItem value="quote" name="quote">
            Quote Image
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default connect()(SelectTemplates);
