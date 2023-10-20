"use client";

import Button from "@/app/components/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const steps = ["basic-info", "bio", "work-experience", "social-profiles"];

export default function FormActionButtonGroup() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") as string;
  const currIndex = steps.indexOf(step);

  const qPrev = steps[currIndex - 1];
  const qNext = steps[currIndex + 1];

  return (
    <>
      {qPrev && (
        <Button
          LinkComponent={Link}
          href={`?step=${qPrev}`}
          variant="outlined"
          sx={{ mr: "12px" }}
        >
          Back
        </Button>
      )}
      {qNext && (
        <Button
          LinkComponent={Link}
          href={`?step=${qNext}`}
          variant="contained"
        >
          Next
        </Button>
      )}
    </>
  );
}
