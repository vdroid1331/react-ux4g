import React from "react";
import { Chart } from "./Chart";

export default {
  title: "Components/Chart",
  component: Chart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Chart Component
The \`Chart\` component is a React wrapper for the powerful UX4G Chart library (built on Chart.js). It supports rendering multiple chart types including bar, line, pie, doughnut, radar, scatter, and bubble charts.

## Usage Guidelines
- **Data Structure:** The \`data\` prop expects standard Chart.js data objects, consisting of a \`labels\` array and a \`datasets\` array.
- **Initialization:** The component safely instantiates the chart only when running in the browser (\`window\` object exists) and cleans up the instance perfectly on unmount to prevent memory leaks.
- **Responsiveness:** It is highly recommended to wrap the \`Chart\` in a sized container and pass \`options={{ responsive: true, maintainAspectRatio: false }}\` to allow the canvas to stretch and fill its parent container fluidly.

## Accessibility
Data visualizations represented solely via canvas elements are inaccessible to screen readers. You must provide alternative text or an accessible data table alongside complex charts. You can use the \`aria-label\` attribute on the canvas wrapper, or visually hidden data tables.
`,
      },
    },
  },
};

export const Default = {
  render: () => {
    const data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart
          type="bar"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const LineChart = {
  render: () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart
          type="line"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const PieChart = {
  render: () => {
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    return (
      <div style={{ width: "400px", height: "400px" }}>
        <Chart
          type="pie"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const DoughnutChart = {
  render: () => {
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    return (
      <div style={{ width: "400px", height: "400px" }}>
        <Chart
          type="doughnut"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const AreaChart = {
  render: () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Area Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          tension: 0.1,
        },
      ],
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart
          type="line"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const RadarChart = {
  render: () => {
    const data = {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],
    };

    return (
      <div style={{ width: "400px", height: "400px" }}>
        <Chart
          type="radar"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const ScatterChart = {
  render: () => {
    const data = {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart
          type="scatter"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const MultiTypeChart = {
  render: () => {
    const data = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          type: "bar",
          label: "Bar Dataset",
          data: [10, 20, 30, 40],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          type: "line",
          label: "Line Dataset",
          data: [50, 50, 50, 50],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
        },
      ],
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart
          type="bar"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const BubbleChart = {
  render: () => {
    const data = {
      datasets: [
        {
          label: "First Dataset",
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 40,
              y: 10,
              r: 10,
            },
            {
              x: 15,
              y: 20,
              r: 25,
            },
            {
              x: 35,
              y: 25,
              r: 20,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart
          type="bubble"
          data={data}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    );
  },
};

export const EventChart = {
  render: () => {
    const data = {
      labels: ["Event 1", "Event 2", "Event 3", "Event 4"],
      datasets: [
        {
          label: "Events Occurred",
          data: [12, 19, 3, 5],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
          barPercentage: 0.5,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return "Event Occurred at: " + context.parsed.y + " times";
            },
          },
        },
      },
    };

    return (
      <div style={{ width: "600px", height: "400px" }}>
        <Chart type="bar" data={data} options={options} />
      </div>
    );
  },
};
