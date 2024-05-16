import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { mockAreaData as data } from "../data/mockData";
import ApexCharts from "apexcharts";
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const AreaChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    var options = {
      series: data.map((item) => ({
        name: item.id,
        data: item.data.map((point) => ({
          x: point.x,
          y: point.y,
        })),
      })),

      chart: {
        type: "area",
        height: 350,
        stacked: true,
      },
      colors: data.map((item) => item.color),
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "monotoneCubic",
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        labels: {
          colors: colors.grey[500],
        },
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            colors: colors.grey[500],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: colors.grey[500],
          },
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <Box id="chart" />;
};

export default AreaChart;
