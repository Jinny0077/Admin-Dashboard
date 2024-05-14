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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";

const ParentItem = ({
  title,
  icon,
  selected,
  setSelected,
  setIsCollapsed,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <Box mr={1}>{icon}</Box>
        <Typography>{title}</Typography>
        {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </Box>
      {open &&
        children.map((child) => (
          <Item
            key={child.title}
            title={child.title}
            to={child.to}
            icon={child.icon}
            selected={selected}
            setSelected={setSelected}
            setIsCollapsed={setIsCollapsed}
          />
        ))}
    </>
  );
};

const Item = ({ title, to, icon, selected, setSelected, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      active={selected === title ? "true" : undefined}
      style={{ color: colors.grey[100] }}
      onClick={() => {
        setSelected(title);
        setIsCollapsed(true);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        cursor: "pointer",
        padding: "10px",
        marginLeft: "20px",
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
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Drawer
      anchor="left"
      open={!isCollapsed}
      onClose={() => setIsCollapsed(false)}
      sx={{
        ".MuiDrawer-paper": {
          background: colors.primary[400],
          // background: colors.grey[700],
        },
      }}
    >
      <Box>
        {/* LOGO AND MENU ICON */}
        <Box
          style={{
            margin: "10px 0 20px 0",
            // color: colors.grey[100],
            width: "250px",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography variant="h3" color={colors.grey[100]}>
              DASHPRO
            </Typography>
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        {/* User */}

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

        {/* Menu Items */}
        <Box paddingLeft={"10%"}>
          <Item
            title="Dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            setIsCollapsed={setIsCollapsed}
            to="/"
          />
          <ParentItem
            title="Data"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            setIsCollapsed={setIsCollapsed}
            children={[
              {
                title: "Team",
                to: "/team",
                icon: <PeopleOutlinedIcon />,
              },
              {
                title: "Contacts Information",
                to: "/contacts",
                icon: <ContactsOutlinedIcon />,
              },
              {
                title: "Invoice Balances",
                to: "/invoices",
                icon: <ReceiptOutlinedIcon />,
              },
            ]}
          />
          <ParentItem
            title="Pages"
            icon={<FileCopyOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            setIsCollapsed={setIsCollapsed}
            children={[
              {
                title: "Profile Form",
                to: "/form",
                icon: <PersonOutlinedIcon />,
              },
              {
                title: "Calendar",
                to: "/calendar",
                icon: <CalendarTodayOutlinedIcon />,
              },
              {
                title: "FAQ Page",
                to: "/faq",
                icon: <HelpOutlineOutlinedIcon />,
              },
            ]}
          />
          <ParentItem
            title="Charts"
            icon={<EqualizerOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            setIsCollapsed={setIsCollapsed}
            children={[
              {
                title: "Bar Chart",
                to: "/bar",
                icon: <BarChartOutlinedIcon />,
              },
              {
                title: "Pie Chart",
                to: "/pie",
                icon: <PieChartOutlineOutlinedIcon />,
              },
              {
                title: "Line Chart",
                to: "/line",
                icon: <TimelineOutlinedIcon />,
              },
              {
                title: "Geography Chart",
                to: "/geography",
                icon: <MapOutlinedIcon />,
              },
            ]}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
