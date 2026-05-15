import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/lightTheme";

import { Provider } from "react-redux";
import { store } from "./store/store";
import "./api/interceptors";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <Provider store={store}>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>

    </Provider>

  </React.StrictMode>
);