import React from "react";
import { connect } from "react-redux";
import { setBackgroundImg } from "../Redux/Actions";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./UploadImage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const UploadImage = ({ dispatch }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    dispatch(setBackgroundImg(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <div className="upload-image">
      <div className={classes.root}>
        <input
          accept=".png,.jpeg, .jpg"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="secondary" component="span">
            Upload your image
          </Button>
        </label>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
      </div>
    </div>
  );
};

export default connect()(UploadImage);
