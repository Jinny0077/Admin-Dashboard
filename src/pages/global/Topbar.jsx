import { useContext, useState, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase, Switch } from "@mui/material";
import Sidebar from "./Sidebar";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    console.log("Before toggle:", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);

    console.log("After toggle:", isSidebarOpen);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={1}
      backgroundColor={colors.grey[800]}
    >
      {/* Sidebar for reopen */}
      <Box display="flex">
        <IconButton onClick={toggleSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
        {isSidebarOpen && <Sidebar />}

        {/* Search Bar */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          ml="20px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <Switch
          onChange={colorMode.toggleColorMode}
          icon={<LightModeOutlinedIcon />}
          checkedIcon={<DarkModeOutlinedIcon />}
          sx={{
            "& .MuiSwitch-track": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? colors.primary[900]
                  : colors.primary[100], // Adjust track color for dark mode
            },
            "& .MuiSwitch-thumb": {
              color:
                theme.palette.mode === "dark"
                  ? colors.grey[100]
                  : colors.grey[800], // Adjust thumb color for dark mode
            },
          }}
        />
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
