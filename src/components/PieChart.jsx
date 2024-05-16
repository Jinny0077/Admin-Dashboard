import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const series = data.map((item) => item.value);
  const labels = data.map((item) => item.label);

  useEffect(() => {
    const options = {
      series: series,
      labels: labels,
      chart: {
        width: "100%",
        height: 400,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
        labels: {
          colors: colors.grey[500],
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
        style: {
          color: colors.grey[500],
          fontSize: "20px",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <Box id="chart" />;
};

export default PieChart;
