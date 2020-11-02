import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./ImageCard.css";

const ImageCard = ({ imageUrl }) => {
  return (
    <div className="card">
      <img alt="design" src={imageUrl} />
      <ButtonGroup
        size="small"
        className="button-wrap"
        variant="contained"
        color="default"
      >
        <Button>Share</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonGroup>
    </div>
  );
};

export default ImageCard;
