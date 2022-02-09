import React from 'react';
import Chart from 'react-apexcharts';
import '../sass/apexChart.scss';
import classes from '../sass/GrapChart.module.scss';
const GrapChart = () => {
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
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#101c31', '#101c31'],
      },
    },
    stroke: {
      show: true,
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
      colors: ['#ccc', '#75efff'],
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
        height={350}
      />
    </div>
  );
};

export default GrapChart;
