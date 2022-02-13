import React from 'react';
import Chart from 'react-apexcharts';
import '../sass/apexChart.scss';
import classes from '../sass/GrapChart.module.scss';
const GrapChart = ({ height }) => {
  console.log(height);
  const series = [
    {
      name: 'Total Cost',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Total Sell',
      data: [76, 85, 101, 98, 87, 105, 91, 120, 94],
    },
  ];
  const options = {
    chart: {
      type: 'bar',
      height: height,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        //colors: ['#ccc', '#75efff'],
      },
    },
    stroke: {
      show: false,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (UAD)',
      },
    },
    fill: {
      opacity: 1,
      //colors: ['#ccc', '#75efff'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' UAD';
        },
      },
    },
  };
  return (
    <div className={classes.grapChart}>
      <Chart
        className="apexChart"
        options={options}
        series={series}
        type="bar"
        height={height}
      />
    </div>
  );
};

export default GrapChart;