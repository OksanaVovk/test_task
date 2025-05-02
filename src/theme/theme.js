import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#ffffff" : "#0a0a0a",
      },
      text: {
        primary: mode === "light" ? "#171717" : "#ededed",
      },
      primary: {
        main: "#2196f3",
      },
      white: {
        main: "#ffffff",
      },
      red: {
        main: "#e03636",
      },
      darkRed: {
        main: "#b42d2d",
      },
    },
  });
