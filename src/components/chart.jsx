import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
//   ChartDataLabels
);

const TradingChart = () => {
  const values = [10, 30, 20, 50, 30, 15, 10];
  const average = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(
    2
  );
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Stock Growth",
        data: values,
        borderColor: "#0D4582",
        // backgroundColor: "#3CC89E",
        tension: 0.4,
        pointBackgroundColor: "white",
        pointBorderColor: "#0D4582",
        pointBorderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "#3CC89E",
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return context.raw + "%"; // Tooltip में % दिखे
          },
        },
      },
      datalabels: {
        align: "top",
        anchor: "end",
        color: "black",
        font: {
          weight: "bold",
          size: 10,
        },
        formatter: (value) => value + "%",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "#e5e5e5",
        },
      },
      y: {
        display: false, // Y-axis हटाया
      },
    },
  };

  const averagePlugin = {  
    id: "averagePlugin",
    afterDraw: (chart) => {
      const { ctx, chartArea: { top, left } } = chart;
      ctx.save();
      const isProfit = average >= 0;
      const color = isProfit ? "green" : "red";
      const arrow = isProfit ? "↑" : "↓";

      
      ctx.fillStyle = color;
      ctx.font = "bold 20px sans-serif";
      ctx.fillText(`${average}% ${arrow}`, left + 5, top + 10);
      ctx.restore();
    },
  };

  return (
    <div style={{ width: "300px", height: "200px" }}>
      <Line data={data} options={options} plugins={[averagePlugin]} width={300} height={200} />
    </div>
  );
};

export default TradingChart;
