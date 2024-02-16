import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title
);
export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  type: "line",
  datasets: [
    {
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],

      // fill: true,
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              time: {
                unit: "date",
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                maxTicksLimit: 7,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return "$" + number_format(value);
                },
              },
              legend: {
                display: false,
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2],
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: "#6e707e",
          titleFontSize: 14,
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: "index",
          caretPadding: 10,
          callbacks: {
            label: function (tooltipItem, chart) {
              var datasetLabel =
                chart.datasets[tooltipItem.datasetIndex].label || "";
              return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
            },
          },
        },
      },
    },
  ],
};

export const data2 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "First dataset",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.8)",
      borderColor: "rgba(75,192,192,0.5)",
      borderWidth: 1,
    },
  ],
};

function Charts_New() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Charts</h1>
      <p className="mb-4">
        Chart.js is a third party plugin that is used to generate the charts in
        this theme. The charts below have been customized - for further
        customization options, please visit the{" "}
        <a target="_blank" href="https://www.chartjs.org/docs/latest/">
          official Chart.js documentation
        </a>
        .
      </p>
      {/* Content Row */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          {/* Area Chart */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                {/* <canvas id="myAreaChart" /> */}
                <Line data={data} />
              </div>
              <hr />
              Styling for the area chart can be found in the
              <code>/js/demo/chart-area-demo.js</code> file.
            </div>
          </div>
          {/* Bar Chart */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
            </div>
            <div className="card-body">
              <div className="chart-bar">
                {/* <canvas id="myBarChart" /> */}
                <Bar data={data2}></Bar>
              </div>
              <hr />
              Styling for the bar chart can be found in the
              <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
          </div>
        </div>
        {/* Donut Chart */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div className="chart-pie pt-4">
                <Doughnut
                  export
                  const
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [55, 30, 15],
                        backgroundColor: [
                          "rgba(14, 68, 214, 0.8)",
                          "rgba(15, 173, 115, 0.8)",
                          "rgba(54, 185, 204, 0.8)",
                        ],
                        borderColor: [
                          "rgba(14, 68, 214, 0.5)",
                          "rgba(15, 173, 115, 0.5)",
                          "rgba(54, 185, 204, 0.5)",
                        ],
                        borderWidth: 1,
                        offset: 4,
                        cutout: 80,
                      },
                    ],
                  }}
                />
              </div>
              <hr />
              Styling for the donut chart can be found in the
              <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </div>
  );
}

export default Charts_New;
