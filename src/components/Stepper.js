import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import Check from "@mui/icons-material/Check";

const steps = ["Заголовок", "Тіло", "Попередній перегляд"];

const ButtonStepper = ({ activeStep }) => {
  return (
    <Stepper sx={{ width: "100%" }}>
      {steps.map((step, index) => (
        <Step
          key={step}
          orientation="vertical"
          indicator={
            <StepIndicator
              variant={activeStep <= index ? "soft" : "solid"}
              color={activeStep < index ? "neutral" : "primary"}
              sx={{
                backgroundColor: activeStep <= index ? "neutral" : "#2196f3", // Змінюємо колір кола для активного кроку
              }}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={[
            activeStep > index &&
              index !== 2 && { "&::after": { bgcolor: "#2196f3" } },
          ]}
        >
          {step}
        </Step>
      ))}
    </Stepper>
  );
};

export default ButtonStepper;
