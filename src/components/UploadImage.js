import React from "react";
import { connect } from "react-redux";
import { setBackgroundImg } from "./Redux/Actions";
import Styles from "../App.css";

const UploadImage = ({ dispatch }) => {
  const handleChange = (e) => {
    dispatch(setBackgroundImg(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <div className="UploadImage">
      <input
        type="file"
        name="file"
        onChange={handleChange}
        accept=".png,.jpeg, .jpg"
      ></input>
    </div>
  );
};

export default connect()(UploadImage);
