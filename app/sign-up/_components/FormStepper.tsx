import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { signUpFormStepType } from "../types";

const steps = [
  { path: "basic-info", label: "Basic Information" },
  { path: "bio", label: "Summary" },
  { path: "work-experience", label: "Work Experience" },
  { path: "social-profiles", label: "Social Profiles" },
];

export default function FormStepper({ step }: { step: signUpFormStepType }) {
  console.log(step);

  return (
    <Stepper>
      {steps.map(({ path, label }) => (
        <Step key={path} active={step === path}>
          <StepLabel>
            <Typography variant="h5">{label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
