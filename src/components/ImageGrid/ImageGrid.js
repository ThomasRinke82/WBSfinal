import React from "react";
import useFirestore from "../Hooks/useFirestore";
import "./ImageGrid.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    // if there are image files, map through them and display them
    <div className="img-grid">
      {docs && docs.map((doc) => <ImageCard key={doc.id} imageUrl={doc.url} />)}
    </div>
  );
};

export default ImageGrid;
