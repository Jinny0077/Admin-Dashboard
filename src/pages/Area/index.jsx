import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import AreaChart from "../../components/AreaChart";

const Area = () => {
  return (
    <Box m="20px">
      <Header title="AREA CHART " subtitle="Simple Area Chart" />
      <Box height="70vh">
        <AreaChart />
      </Box>
    </Box>
  );
};

export default Area;
