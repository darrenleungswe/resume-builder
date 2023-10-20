import { Container, Typography } from "@mui/material";
import FormStepper from "./_components/FormStepper";
import FormActionButtonGroup from "./_components/FormActionButtonGroup";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Container>
        <Typography variant="h1" mb={5.5}>
          Create Your Own Resume
        </Typography>
        <FormStepper />
        {children}
        <FormActionButtonGroup />
      </Container>
    </main>
  );
}
