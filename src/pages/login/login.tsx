import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import {
  DarkMode,
  LightMode,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";

import { authService } from "../../services/authService";
import { loginSuccess } from "../../store/authSlice";
import type { RootState } from "../../store/store";

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

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const token = useSelector(
    (state: RootState) => state.auth.token
  );

 useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token]);



  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await authService.login({
        email,
        password,
      });

      // Redux update
      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );

      // persist token
      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" className="login-container">

      <Paper elevation={0} className="login-card">

        {/* LEFT */}
        <Box className="login-left">

          {/* Theme Toggle */}
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

          {/* FORM */}
          <Box className="login-form">

            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              margin="normal"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              margin="normal"
            />

            {error && (
              <Typography
                color="error"
                sx={{ mt: 1 }}
              >
                {error}
              </Typography>
            )}

            <Button
              fullWidth
              variant="contained"
              className="login-button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Sign In"}
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