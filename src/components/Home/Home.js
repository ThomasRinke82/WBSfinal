import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#5effac",
    color: "#0c343f",

    "&:hover": {
      backgroundColor: "#0c343f",
      color: "#5effac",
    },
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  MuiStepIconActive: {
    backgroundColor: "#5effac",
    color: "#0c343f",
  },
}));

function getSteps() {
  return [
    "A social media presence is essential nowadays.",
    "Spoyou provides you with great images and templates.",
    "Customize your designs in seconds.",
    "Save and share the final design.",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Create awesome content with just a few button clicks.";
    case 1:
      return "Upload your files or take one from our huge database.";
    case 2:
      return "Just insert the information you want to display and share. Spoyou does the rest.";
    case 3:
      return "Finally, you can save your result on your selection for later usage or share it directly to your social media channels.";
    default:
      return "Unknown stepIndex";
  }
}

const Home = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <h1 id="home-h1">Welcome to Spoyou!</h1>
      <h2>Create awesome designs for your social media channels.</h2>
      <div className="img-container">
        <img
          id="img-home"
          src="https://firebasestorage.googleapis.com/v0/b/final-project-wbs.appspot.com/o/assets%2FSocial%20networking-amico.png?alt=media&token=c296cd72-9e33-43c0-a50f-9a0fb575f8c1"
          href="https://stories.freepik.com/web"
        />
      </div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Start creating your first awesome design!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default Home;
