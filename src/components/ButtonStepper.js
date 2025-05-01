import * as React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Заголовок", "Тіло", "Попередній перегляд"];

const ButtonStepper = ({ activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{
        width: "100%",
        "& .MuiStepLabel-root": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {steps.map((step, index) => (
        <Step key={step}>
          <StepLabel
            sx={{
              color: activeStep <= index ? "#2196f3" : "#B0BEC5",
              fontWeight: activeStep === index ? "bold" : "normal",
              justifyContent: "center",
            }}
          >
            {step}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ButtonStepper;
