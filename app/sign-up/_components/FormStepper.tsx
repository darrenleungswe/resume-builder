"use client";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

const steps = [
  { path: "basic-info", label: "Basic Information" },
  { path: "bio", label: "Summary" },
  { path: "work-experience", label: "Work Experience" },
  { path: "social-profiles", label: "Social Profiles" },
];

export default function FormStepper() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  return (
    <Stepper sx={{ mb: "36px" }} connector={null}>
      {steps.map(({ path, label }) => (
        <Step key={path} active={step === path} sx={{ px: 0, mr: "24px" }}>
          <StepLabel>
            <Typography variant="h5">{label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
