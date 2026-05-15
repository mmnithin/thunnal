import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItemButton,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  HelpOutlined,
  Home,
  Logout,
  Menu,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

import "./Sidebar.css";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ open, setOpen }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "FAQ", icon: <HelpOutlined />, path: "/faq" },
  ];

  return (
    <Box className={`sidebar ${open ? "open" : "collapsed"}`}>

      {/* TOP */}
      <Box className="sidebar-top">

        {open && (
          <Box className="logo">
            Rose<span>App</span>
          </Box>
        )}

        <IconButton onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>

      </Box>

      {/* MENU */}
      <List>

        {menuItems.map((item) => (
          <Tooltip
            key={item.text}
            title={!open ? item.text : ""}
            placement="right"
          >
            <ListItemButton
              className="menu-item"
              onClick={() => navigate(item.path)}
            >
              {item.icon}

              {open && (
                <span className="label">
                  {item.text}
                </span>
              )}
            </ListItemButton>
          </Tooltip>
        ))}

        {/* LOGOUT */}
        <Tooltip title={!open ? "Logout" : ""}>
          <ListItemButton
            className="menu-item logout"
            onClick={handleLogout}
          >
            <Logout />

            {open && (
              <span className="label">
                Logout
              </span>
            )}
          </ListItemButton>
        </Tooltip>

      </List>

      <Box className="sidebar-user">
        <Avatar className="avatar">S</Avatar>

        {open && (
          <Box className="user-details">
            <Typography className="user-name">Sasha Merkel</Typography>
            <Typography className="user-role">Admin</Typography>
          </Box>
        )}
      </Box>

    </Box>
  );
}

export default Sidebar;