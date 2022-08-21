import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { blue } from "@mui/material/colors";
import { Logout, Settings } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  const location = useLocation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClicked = () => {
    const cookies = new Cookies();
    cookies.remove("auth_token");
    handleClose();
    navigate("/");
  };

  const isMainPage = location.pathname === `/`;

  return (
    <Container>
      <div
        className={`header-txt d-flex space-btwn`}
        style={{ alignItems: "center" }}
      >
        <div>Real Life RPG Game</div>
        {isMainPage && (
          <React.Fragment>
            <Box className={`d-flex center-div`}>
              <Tooltip title={`Account settings`}>
                <IconButton
                  size={`small`}
                  sx={{ ml: 2 }}
                  onClick={handleClick}
                  aria-haspopup={true}
                  aria-expanded={open ? "true" : undefined}
                  aria-controls={open ? "account-menu" : undefined}
                >
                  <Avatar sx={{ width: 28, height: 28, bgcolor: blue[400] }}>
                    <ManageAccountsIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem disabled={true}>
                <ListItemIcon>
                  <EmojiEventsTwoToneIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                Leaderboard
              </MenuItem>
              <Divider />
              <MenuItem disabled={true}>
                <ListItemIcon>
                  <LocalPostOfficeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Messages
              </MenuItem>
              <MenuItem disabled={true}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => handleLogoutClicked()}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </div>
    </Container>
  );
};

export default Header;
