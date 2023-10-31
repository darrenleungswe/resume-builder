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
      {steps.map(({ path, label }, index) => (
        <Step key={path} active={step === path} sx={{ px: 0, mr: "24px" }}>
          <StepLabel
            StepIconComponent={() => (
              <Box
                component="span"
                width="28px"
                height="28px"
                borderRadius={99}
                bgcolor="primary.main"
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mr="4px"
              >
                <Typography component="span" color="white" variant="h6">
                  {index + 1}
                </Typography>
              </Box>
            )}
          >
            <Typography component="span" variant="h5">
              {label}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
