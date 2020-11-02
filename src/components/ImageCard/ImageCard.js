import React from "react";
import Button from "@material-ui/core/Button";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import "./ImageCard.css";

const ImageCard = ({ imageUrl }) => {
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

        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default ImageCard;
