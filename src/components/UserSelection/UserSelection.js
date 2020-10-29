import React, { useState } from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import Modal from "./Modal";
import "./UserSelection.css";

function UserSelection() {
  const [selectedImage, setSelectedImage] = useState();

  return (
    <div className="UserSelection">
      <ImageGrid setSelectedImage={setSelectedImage} />
      {/*conditional rendering*/}
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default UserSelection;
