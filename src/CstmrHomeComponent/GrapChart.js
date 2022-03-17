import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useGlobalContext } from '../hook/AccountContext';
import '../sass/apexChart.scss';
import classes from '../sass/GrapChart.module.scss';
const GrapChart = ({ height }) => {
  const { data, loading } = useGlobalContext();

  const [cost, setCost] = useState([]);
  const [sell, setSell] = useState([]);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const x = data.map((obj) =>
        new Date(obj.time.seconds * 1000).toLocaleString('default', {
          month: 'short',
          year: '2-digit',
        })
      );

      //last 10months name with years
      var today = new Date();
      var d;
      var monthLc = [];
      for (var i = 10; i > 0; i -= 1) {
        //here should be latest seconds instade of today.
        d = new Date(today.getFullYear(), today.getMonth() - i, 1);

        const x = d.toLocaleString('default', {
          month: 'short',
          year: '2-digit',
        });

        monthLc.push(x);
      }
      setMonth(monthLc.reverse());

      //
      // const xxxxxx = data.filter(
      //   (obj) =>
      //     new Date(obj.time.seconds * 1000).toLocaleString('default', {
      //       year: '2-digit',
      //     }) > month[month.length - 1].slice(-2)
      // );
      // console.log(xxxxxx);
    }
  }, [data]);

  const series = [
    {
      name: 'Total Cost',
      //data: [12, 44, 55, 57, 56, 61, 58, 63, 60, 66],
      data: cost,
    },
    {
      name: 'Total Sell',
      //data: [33, 76, 85, 101, 98, 87, 105, 91, 120, 94],
      data: sell,
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
      // categories: [
      //   'Jan',
      //   'Feb',
      //   'Mar',
      //   'Apr',
      //   'May',
      //   'Jun',
      //   'Jul',
      //   'Aug',
      //   'Sep',
      //   'Oct',
      // ],

      categories: month,
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
