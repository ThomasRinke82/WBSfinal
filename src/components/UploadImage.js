import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        onChange={handleChange}
        accept=".png,.jpeg"
      ></input>
      <div>
        <img src={file} alt="" style={{ height: 100 }} />
      </div>
    </div>
  );
};

export default UploadImage;
