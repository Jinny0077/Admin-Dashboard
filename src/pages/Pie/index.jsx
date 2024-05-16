import React from "react";
import PieChart from "../../components/PieChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART " subtitle="Simple Pie Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
