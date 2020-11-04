import React from "react";
import { connect } from "react-redux";
import { setBackgroundImg } from "../Redux/Actions";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./UploadImage.css";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  button: {
    color: "#0c343f",
    backgroundColor: "#5effac",
    "&:hover": {
      backgroundColor: "#0c343f",
      color: "#5effac",
    },
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
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component="span"
          >
            Upload your image
          </Button>
        </label>
      </div>
    </div>
  );
};

export default connect()(UploadImage);
