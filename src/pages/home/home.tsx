import { Typography, Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Welcome Home 👋
      </Typography>

      <Typography sx={{ mt: 2, color: "text.secondary" }}>
        Your dashboard cards are ready. Keep the layout light and clean.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 20,
          mt: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "background.paper",
            boxShadow: "0 14px 35px rgba(114, 92, 92, 0.08)",
            minHeight: 150,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
            Sales overview
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            $8,619.86
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "background.paper",
            boxShadow: "0 14px 35px rgba(114, 92, 92, 0.08)",
            minHeight: 150,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
            Average sale value
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            $48.68
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "background.paper",
            boxShadow: "0 14px 35px rgba(114, 92, 92, 0.08)",
            minHeight: 150,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
            Items per sale
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            2.8
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;