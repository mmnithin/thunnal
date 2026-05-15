import { Typography, Box } from "@mui/material";

function FAQ() {
  return (
    <Box>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        FAQ
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Q: How does login work?<br />
        A: You login using API + Redux auth state.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Q: How is token stored?<br />
        A: Stored in localStorage and sent via interceptor.
      </Typography>
    </Box>
  );
}

export default FAQ;