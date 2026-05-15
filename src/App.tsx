import { useMemo, useState } from "react";

import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";


import {
  lightTheme,
  darkTheme,
} from "./theme/theme";
import AppRouter from "./routes/AppRoutes";

function App() {

  const [darkMode, setDarkMode] =
    useState(false);

  const theme = useMemo(
    () =>
      darkMode
        ? darkTheme
        : lightTheme,
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppRouter
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

    </ThemeProvider>
  );
}

export default App;