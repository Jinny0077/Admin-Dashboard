import { useContext, useState } from "react";
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

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Sidebar for reopen */}
      <Box marginTop="10px" onClick={() => setIsCollapsed(false)}>
        <MenuOutlinedIcon />
        {isCollapsed ? <Sidebar /> : undefined}
        <Sidebar />
      </Box>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode == "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <Switch
          onChange={colorMode.toggleColorMode}
          icon={<LightModeOutlinedIcon />}
          checkedIcon={<DarkModeOutlinedIcon />}
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
