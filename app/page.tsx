import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box component="main" m={3}>
      <Typography variant="h1">Lorem Ipsum</Typography>
      <Typography variant="h2">Lorem Ipsum</Typography>
      <Typography variant="h3">Lorem Ipsum</Typography>
      <Typography variant="h4">Lorem Ipsum</Typography>
      <Typography variant="h5">Lorem Ipsum</Typography>
      <Typography variant="h6">Lorem Ipsum</Typography>
      <Typography variant="body1">Lorem Ipsum</Typography>
      <Typography variant="body2">Lorem Ipsum</Typography>
      <Typography variant="button">Lorem Ipsum</Typography>
      <div>
        <Button sx={{ mr: 1 }} variant="contained" disableElevation>
          Click Me
        </Button>
        <Button variant="outlined">Click Me</Button>
      </div>
    </Box>
  );
}
