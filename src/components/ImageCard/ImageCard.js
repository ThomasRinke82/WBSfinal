import React from "react";
import Button from "@material-ui/core/Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { projectFirestore, projectStorage } from "../Firebase/config";

import "./ImageCard.css";

const ImageCard = ({ imageUrl, docId }) => {
  const handleDelete = () => {
    projectFirestore
      .collection("images")
      .doc(docId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className="card">
      <img alt="design" src={imageUrl} />
      <div className="button-wrap">
        <FacebookShareButton
          url={imageUrl}
          quote={"Awesome Design made with Spoyou!"}
          hashtag="#spoyou"
        >
          <FacebookIcon className="icon" size={42} />
        </FacebookShareButton>

        <TwitterShareButton
          url={imageUrl}
          title={"Awesome Design!"}
          hashtag="#spoyou"
        >
          <TwitterIcon className="icon" size={42} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={imageUrl}
          title={"Awesome Design made with Spoyou!"}
          separator=":: "
        >
          <WhatsappIcon className="icon" size={42} />
        </WhatsappShareButton>
        <Button>Download</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default ImageCard;
