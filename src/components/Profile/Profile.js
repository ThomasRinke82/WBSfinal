import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./Profile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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

const Profile = () => {
  const classes = useStyles();
  return (
    <div className="profile">
      <div className="background-image"></div>

      <div className="profile-card">
        <div className="buttons-top">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Contact me
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            My designs
          </Button>
        </div>
        <div>
          <img
            id="profile-image"
            src="https://firebasestorage.googleapis.com/v0/b/final-project-wbs.appspot.com/o/assets%2F12080380_1083536398347407_5481510197838210309_o.jpg?alt=media&token=245654a2-ebb2-44de-a21e-f1856c2717d6"
            alt="profile"
          />
        </div>
        <div>
          <img
            id="profile-club"
            src="https://firebasestorage.googleapis.com/v0/b/final-project-wbs.appspot.com/o/assets%2Fnietleben.png?alt=media&token=f2b88bf4-2062-4a17-8a70-b642bba7c74b"
            alt="icon"
          />
        </div>

        <div className="content-wrap">
          <h1>Thomas</h1>
          <h2>Nietlebener SV</h2>

          <ButtonGroup size="small" variant="contained" color="default">
            <Button disabled>My sports:</Button>
            <Button className={classes.button} color="primary">
              Soccer
            </Button>
            <Button className={classes.button} color="primary">
              Hockey
            </Button>
            <Button className={classes.button} color="primary">
              Biathlon
            </Button>
          </ButtonGroup>

          <div className="text-wrap">
            <h3>About me</h3>
            <p>
              Hi, I am into local sport since I was a kid. I was active at first
              and then I coached and volunteered in clubs.{" "}
            </p>
            <p>
              Professionally I started as a journalist and published two books
              about local soccer before I was in charge of the massive growth of
              fupa.net in saxony-anhalt.
            </p>
            <p>
              Now I advice clubs and federations about sponsorships, social
              media and digitalization in general. I support the Nietlebener SV
              as a player and as the social media manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
