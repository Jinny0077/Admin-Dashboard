import { useState } from "react";
import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      active={selected === title ? "true" : undefined}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      sx={{
        display: "flex",
        alignItems: "center",

        textDecoration: "none",
        cursor: "pointer",
        padding: "10px",
      }}
    >
      {icon && <Box mr={1}>{icon}</Box>}
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography>{title}</Typography>
      </Link>
    </Box>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.colors);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Drawer
      anchor="left"
      open={!isCollapsed}
      onClose={() => setIsCollapsed(true)}
      sx={{
        ".MuiDrawer-paper": {
          background: `${colors.primary[600]} `,
        },
      }}
    >
      <Box>
        {/* LOGO AND MENU ICON */}
        <Box
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
            width: "250px",
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        {/* User */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={"../../../src/assets/user.png"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Jinny
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Admin
              </Typography>
            </Box>
          </Box>
        )}

        {/* Menu Items */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Manage Team"
            to="/manageTeam"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
