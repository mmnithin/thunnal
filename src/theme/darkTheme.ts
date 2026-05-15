import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#c76363",
    },

    secondary: {
      main: "#e07a7a",
    },

    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },

  shape: {
    borderRadius: 18,
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default darkTheme;