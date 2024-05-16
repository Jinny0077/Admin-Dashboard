import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART " subtitle="Simple Bar Chart" />
      <Box height="74vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
