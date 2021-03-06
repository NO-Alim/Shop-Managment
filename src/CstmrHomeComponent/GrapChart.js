import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useGlobalContext } from '../hook/AccountContext';
import '../sass/apexChart.scss';
import classes from '../sass/GrapChart.module.scss';
const GrapChart = ({ height }) => {
  const { data } = useGlobalContext();

  const [cost, setCost] = useState([]);
  const [sell, setSell] = useState([]);
  const [month, setMonth] = useState([]);

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

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     var today = new Date();

  //     var d;
  //     var monthLc = [];
  //     for (var i = 10; i > 0; i -= 1) {
  //       //here should be latest seconds instade of today.
  //       d = new Date(today.getFullYear(), today.getMonth() - i, 1);

  //       const monthYear = d.toLocaleString('default', {
  //         month: 'short',
  //         year: '2-digit',
  //       });

  //       monthLc.push(monthYear);
  //     }

  //     setMonth(monthLc.reverse());
  //   }
  // }, [data]);
  // useEffect(() => {
  //   let expenseData = [];
  //   let incomeData = [];

  //   //map month
  //   month.map((str) => {
  //     //not exicuted
  //     //looping data if include str
  //     const xx = data.filter(
  //       (obj) =>
  //         new Date(obj.time.seconds * 1000).toLocaleString('default', {
  //           month: 'short',
  //           year: '2-digit',
  //         }) === str
  //     );

  //     //console.log(xx);
  //     if (xx && xx.length > 0) {
  //       //not exicuted
  //       //console.log(xx);
  //       const filterIncome = xx.filter((obj) => obj.income);
  //       const filterExpense = xx.filter((obj) => !obj.income);
  //       const income = filterIncome
  //         .map((item) => parseFloat(item.price))
  //         .reduce((prev, curr) => prev + curr, 0);

  //       const expense = filterExpense
  //         .map((item) => parseFloat(item.price))
  //         .reduce((prev, curr) => prev + curr, 0);

  //       //push every income & expense data to
  //       incomeData.push(income);
  //       expenseData.push(expense);
  //     } else {
  //       //if there is no data on this month let add 0
  //       incomeData.push(0);
  //       expenseData.push(0);
  //     }
  //   });

  //   setSell(incomeData);
  //   setCost(expenseData);
  // }, [month]);

  useEffect(() => {
    if (data && data.length > 0) {
      var today = new Date();
      const minDate = Math.min.apply(
        null,
        data.map((item) => {
          return item.time.seconds;
        })
      );

      // devided by 1000 for milisec to sec
      const tenMonthLess = new Date().setMonth(today.getMonth() - 10) / 1000;
      const tenDaysLess = new Date().setDate(today.getDate() - 10) / 1000;
      const tenHoursLess = new Date().setHours(today.getHours() - 10) / 1000;
      const tenMinutesLess =
        new Date().setMinutes(today.getMinutes() - 10) / 1000;

      //-----------------------------don't need to change data before this line

      var d;
      var monthLc = [];

      if (minDate > tenHoursLess) {
        //work for minutes

        var timeFrom = (X) => {
          var dates = [];
          for (let I = 1; I < Math.abs(X); I++) {
            dates.push(
              new Date(
                new Date().getTime() - (X >= 0 ? I : I - I - I) * 60 * 1000
              ).toLocaleString('default', {
                minute: 'numeric',
                hour: 'numeric',
              })
            );
          }
          return dates;
        };

        const x = timeFrom(11);
        monthLc.push(x);
        setMonth(x.reverse());

        //-----------------
        let expenseData = [];
        let incomeData = [];

        x.map((str) => {
          const xx = data.filter(
            (obj) =>
              new Date(obj.time.seconds * 1000).toLocaleString('default', {
                minute: 'numeric',
                hour: 'numeric',
              }) === str.toString()
          );

          if (xx && xx.length > 0) {
            const filterIncome = xx.filter((obj) => obj.income);
            const filterExpense = xx.filter((obj) => !obj.income);
            const income = filterIncome
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);

            const expense = filterExpense
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);
            incomeData.push(income);
            expenseData.push(expense);
          } else {
            incomeData.push(0);
            expenseData.push(0);
          }

          setSell(incomeData);
          setCost(expenseData);
        });
        console.log('minutes');
      } else if (minDate > tenDaysLess) {
        //work for hours

        // var timeFrom = (X) => {
        //   var dates = [];
        //   for (let I = 1; I < Math.abs(X); I++) {
        //     dates.push(
        //       new Date(today.getTime() - 1000 * 60 * 60 * I).toLocaleString()
        //     );
        //   }
        //   return dates;
        // };

        var timeFrom = (X) => {
          var dates = [];
          for (let I = 1; I < Math.abs(X); I++) {
            dates.push(
              new Date(
                new Date().getTime() - (X >= 0 ? I : I - I - I) * 60 * 60 * 1000
              ).toLocaleString('default', {
                hour: 'numeric',
              })
            );
          }
          return dates;
        };

        const x = timeFrom(11);
        monthLc.push(x);
        setMonth(x.reverse());

        //-----------------
        let expenseData = [];
        let incomeData = [];

        x.map((str) => {
          const xx = data.filter(
            (obj) =>
              new Date(obj.time.seconds * 1000).toLocaleString('default', {
                hour: 'numeric',
              }) === str.toString()
          );

          if (xx && xx.length > 0) {
            const filterIncome = xx.filter((obj) => obj.income);
            const filterExpense = xx.filter((obj) => !obj.income);
            const income = filterIncome
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);

            const expense = filterExpense
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);
            incomeData.push(income);
            expenseData.push(expense);
          } else {
            incomeData.push(0);
            expenseData.push(0);
          }

          setSell(incomeData);
          setCost(expenseData);
        });
        console.log('hours');
      } else if (minDate > tenMonthLess) {
        //work for days
        var timeFrom = (X) => {
          var dates = [];
          for (let I = 1; I < Math.abs(X); I++) {
            dates.push(
              new Date(
                new Date().getTime() -
                  (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
              ).toLocaleString('default', {
                day: '2-digit',
                month: 'short',
              })
            );
          }
          return dates;
        };
        const x = timeFrom(11);
        monthLc.push(x);
        setMonth(x.reverse());

        //-----------------
        let expenseData = [];
        let incomeData = [];

        x.map((str) => {
          const xx = data.filter(
            (obj) =>
              new Date(obj.time.seconds * 1000).toLocaleString('default', {
                day: '2-digit',
                month: 'short',
              }) === str.toString()
          );

          if (xx && xx.length > 0) {
            const filterIncome = xx.filter((obj) => obj.income);
            const filterExpense = xx.filter((obj) => !obj.income);
            const income = filterIncome
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);

            const expense = filterExpense
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);
            incomeData.push(income);
            expenseData.push(expense);
          } else {
            incomeData.push(0);
            expenseData.push(0);
          }

          setSell(incomeData);
          setCost(expenseData);
        });

        console.log('days');
      } else {
        //work for month

        var timeFrom = (X) => {
          var dates = [];
          for (var i = 10; i > 0; i -= 1) {
            d = new Date(today.getFullYear(), today.getMonth() - i, 1);

            const monthYear = d.toLocaleString('default', {
              month: 'short',
              year: '2-digit',
            });

            dates.push(monthYear);
          }
          return dates;
        };

        const x = timeFrom(11);
        monthLc.push(x);
        setMonth(x.reverse());

        //-----------------
        let expenseData = [];
        let incomeData = [];

        x.map((str) => {
          const xx = data.filter(
            (obj) =>
              new Date(obj.time.seconds * 1000).toLocaleString('default', {
                month: 'short',
                year: '2-digit',
              }) === str.toString()
          );

          if (xx && xx.length > 0) {
            const filterIncome = xx.filter((obj) => obj.income);
            const filterExpense = xx.filter((obj) => !obj.income);
            const income = filterIncome
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);

            const expense = filterExpense
              .map((item) => parseFloat(item.price))
              .reduce((prev, curr) => prev + curr, 0);
            incomeData.push(income);
            expenseData.push(expense);
          } else {
            incomeData.push(0);
            expenseData.push(0);
          }

          setSell(incomeData);
          setCost(expenseData);
        });

        console.log('month');

        // for (var i = 10; i > 0; i -= 1) {
        //   d = new Date(today.getFullYear(), today.getMonth() - i, 1);

        //   const monthYear = d.toLocaleString('default', {
        //     month: 'short',
        //     year: '2-digit',
        //   });

        //  return monthYear;
        // }
      }
    }
  }, [data]);
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
