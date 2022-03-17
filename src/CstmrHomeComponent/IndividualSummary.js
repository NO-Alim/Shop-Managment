import React, { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { GiFruitBowl, GiReceiveMoney, GiShop } from 'react-icons/gi';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/IndividualSummary.module.scss';

//Earning Method
//TotalEarning = (SellProduct - ProductLive) - BuyProduct

const IndividualSummary = () => {
  const { data, duration, loadinng } = useGlobalContext();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // const filterByDuration = (e) =>{
  //   const filterData = data.map((item) =>{
  //     let dur;
  //     if () {

  //     }
  //   })
  // }

  useEffect(() => {
    const date = new Date();
    let filterData;

    //const day = date.getDate();
    //const month = date.getMonth();

    // let dur;

    // switch (duration) {
    //   case 'day':
    //     dur = date.getDate();
    //     break;
    //   case 'month':
    //     dur = date.getMonth();
    //     break;
    //   default:
    //     dur = null;
    //     break;
    // }

    //1st step filter data when selected value change
    if (data && data.length > 0) {
      const year = date.getFullYear();
      const day = date.getDate();
      const month = date.getMonth();

      if (duration === 'month') {
        filterData = data.filter(
          (obj) =>
            new Date(obj.time.seconds * 1000).getMonth() === month &&
            new Date(obj.time.seconds * 1000).getFullYear() === year
        );
      }

      if (duration === 'day') {
        filterData = data.filter(
          (obj) =>
            new Date(obj.time.seconds * 1000).getDate() === day &&
            new Date(obj.time.seconds * 1000).getMonth() === month &&
            new Date(obj.time.seconds * 1000).getFullYear() === year
        );
      }

      if (duration === 'year') {
        //for year

        filterData = data.filter(
          (obj) => new Date(obj.time.seconds * 1000).getFullYear() === year
        );
      }
    }

    //2nd step filteerData come from 1st step and now this divided by two category 1.income 2.expense
    //and then count all;
    if (filterData) {
      const filterIncome = filterData.filter((obj) => obj.income);
      const filterExpense = filterData.filter((obj) => !obj.income);

      if (filterIncome) {
        setIncome(
          filterIncome
            .map((item) => parseFloat(item.price))
            .reduce((prev, curr) => prev + curr, 0)
        );
      }
      if (filterExpense) {
        setExpense(
          filterExpense
            .map((item) => parseFloat(item.price))
            .reduce((prev, curr) => prev + curr, 0)
        );
      }
    }

    if (!data) {
      setExpense(0);
      setIncome(0);
    }

    if (data && data.length === 0) {
      setExpense(0);
      setIncome(0);
    }
  }, [data, duration]);

  //here need ProductLive
  return (
    <div className={classes.individualSummary}>
      <div className={classes.singleSummary}>
        <div className={classes.icon}>
          <span>
            <i>
              <GiShop />
            </i>
          </span>
        </div>
        <div className={classes.text}>
          <span className={classes.description}>Product Live</span>
          <h1>$--</h1>
        </div>
      </div>
      <div className={classes.singleSummary}>
        <div className={classes.icon}>
          <span>
            <i>
              <FiShoppingBag />
            </i>
          </span>
        </div>
        <div className={classes.text}>
          <span className={classes.description}>Sale Products</span>
          <h1>${income.toFixed(2)}</h1>
        </div>
      </div>
      <div className={classes.singleSummary}>
        <div className={classes.icon}>
          <span>
            <i>
              <GiFruitBowl />
            </i>
          </span>
        </div>
        <div className={classes.text}>
          <span className={classes.description}>Expense</span>
          <h1 style={{ color: 'red' }}>${expense.toFixed(2)}</h1>
        </div>
      </div>
      <div className={classes.singleSummary}>
        <div className={classes.icon}>
          <span>
            <i>
              <GiReceiveMoney />
            </i>
          </span>
        </div>
        <div className={classes.text}>
          <span className={classes.description}>Total Earning</span>
          <h1 className={`${income - expense < 0 ? 'ex-price' : ''}`}>
            ${(income - expense).toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IndividualSummary;
