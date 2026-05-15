import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  DarkMode,
  LightMode,
} from "@mui/icons-material";

import "./Login.css";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

function Login({
  darkMode,
  setDarkMode,
}: Props) {

  return (
    <Container maxWidth="lg" className="login-container">

      <Paper elevation={0} className="login-card">

        {/* LEFT */}

        <Box className="login-left">

          <Box className="theme-toggle">

            <IconButton
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              {darkMode ? (
                <LightMode />
              ) : (
                <DarkMode />
              )}
            </IconButton>

          </Box>

          <Typography
            variant="h3"
            className="login-title"
          >
            Welcome Back
          </Typography>

          <Typography className="login-subtitle">
            Discover premium fashion experiences.
          </Typography>

          <Box className="login-form">

            <TextField
              fullWidth
              label="Email"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              className="login-button"
            >
              Sign In
            </Button>

          </Box>

        </Box>

        {/* RIGHT */}

        <Box className="login-right">

          <img
            src="/assets/hero.png"
            alt="Fashion"
            className="login-image"
          />

        </Box>

      </Paper>

    </Container>
  );
}

export default Login;