import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#c76363",
    },

    secondary: {
      main: "#b55252",
    },

    background: {
      default: "#FFF7F7",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F1F1F",
      secondary: "#6B6B6B",
    },
  },

  shape: {
    borderRadius: 18,
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default lightTheme;