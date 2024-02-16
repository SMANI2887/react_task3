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
  labels: ["Jan", "", "Mar", "", "May", "", "Jul", "", "Sep", "", "Nov", ""],
  datasets: [
    {
      label: "First dataset",
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const data2 = {
  labels: ["Jan", "", "Mar", "", "May", "", "Jul", "", "Sep", "", "Nov", ""],
  datasets: [
    {
      label: "First dataset",
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
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
                <Bar data={data2} ></Bar> 




                 
             
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
                {/*<canvas id="myPieChart" width="246" height="253" style={"display: block width: 246px height: 253px"} className="chartjs-render-monitor"/>*/}
                <Doughnut
                  export
                  const
                  data={{
                    labels: [ "Blue", "Yellow","Red",],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [ 55, 30,15,],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                        ],
                        borderWidth: 1,
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
