import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: open ? "240px" : "80px",
          transition: "0.3s ease",
          padding: "20px",
          background: "#FFF7F7",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>

    </Box>
  );
}

export default MainLayout;