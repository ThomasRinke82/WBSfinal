import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState();

  const changeHandler = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} accept=".png,.jpeg" />
        <span>Upload</span>
        <img src={file} style={{ height: 200 }} />
      </label>
    </form>
  );
};

export default UploadForm;
