import React, { useState } from "react";

import ProfileAvatar from "../avatar/ProfileAvatar";
import "./profileNavbar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  IconButton,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  AppBar,
  useScrollTrigger,
} from "@mui/material";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const ProfileNavbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background: "#fff",
          }}
        >
          <Toolbar>
            <div className="profile-navbar-container">
              <div className="profile-navbar">
                <div className="logo">
                  <img
                    src="./images/logo.svg"
                    alt="Zoukas-logo"
                    className="desktop-logo"
                  />
                  <img
                    src="./images/logo-min.svg"
                    alt="Zoukas-logo"
                    className="mobile-logo"
                  />
                </div>
                <div className="links-avatar-container">
                  <div className="profile-navbar-links">
                    <ul>
                      <li>
                        <a href="#home">Messages</a>
                      </li>
                      <li>
                        <a href="#contact"> Reports</a>
                      </li>
                      <li>
                        <a href="#features">Switch to Client</a>
                      </li>
                      <li>
                        <ProfileAvatar avatarheight="60px" avatarWidth="60px" />{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mobile-menu">
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton onClick={handleOpenNavMenu}>
                      <MoreVertIcon
                        fontSize="large"
                        sx={{
                          color: "#3E4E61",
                        }}
                      />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        Switch to Client
                      </MenuItem>
                    </Menu>
                  </Box>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default ProfileNavbar;
