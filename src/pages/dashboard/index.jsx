import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItem="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
