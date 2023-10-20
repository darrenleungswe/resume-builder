import { Button as ButtonPrimitive, ButtonProps } from "@mui/material";

export default function Button({ children, sx, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      disableElevation
      {...props}
      sx={{ borderRadius: "12px", ...sx }}
    >
      {children}
    </ButtonPrimitive>
  );
}
