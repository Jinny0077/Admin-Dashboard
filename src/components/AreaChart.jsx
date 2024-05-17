import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { mockAreaData as data } from "../data/mockData";
import ApexCharts from "apexcharts";
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const AreaChart = ({ isDashboard = false }) => {
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
        height: isDashboard ? 250 : 350,
        stacked: true,
        toolbar: {
          show: isDashboard ? false : true,
        },
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
        show: isDashboard ? false : true,
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
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: undefined,
          colors: [colors.grey[100]],
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
