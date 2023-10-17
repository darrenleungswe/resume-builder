import { Theme, createTheme } from "@mui/material";
import { Ubuntu, Open_Sans } from "next/font/google";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const theme: Theme = createTheme({
  typography: {
    fontFamily: [ubuntu.style.fontFamily, openSans.style.fontFamily].join(","),
    h1: {
      fontSize: "2.488rem",
      fontWeight: 700,
      lineHeight: 1.33,
    },
    h2: {
      fontSize: "2.074rem",
      fontWeight: 700,
      lineHeight: 1.33,
    },
    h3: {
      fontSize: "1.728rem",
      fontWeight: 700,
      lineHeight: 1.33,
    },
    h4: {
      fontSize: "1.44rem",
      fontWeight: 700,
      lineHeight: 1.33,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 700,
      lineHeight: 1.33,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.33,
    },
    body1: {
      fontFamily: openSans.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.33,
    },
    body2: {
      fontFamily: openSans.style.fontFamily,
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.33,
    },
    button: {
      fontFamily: ubuntu.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      lighter: "#ecfdf5",
      light: "#a7f3d0",
      main: "#34d399",
      dark: "#047857",
      darker: "#064e3b",
    },
    text: {
      primary: "#313131",
    },
  },
});

export default theme;
