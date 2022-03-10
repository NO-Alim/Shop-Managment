import React, { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { GiFruitBowl, GiReceiveMoney, GiShop } from 'react-icons/gi';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/IndividualSummary.module.scss';

//Earning Method
//TotalEarning = (SellProduct - ProductLive) - BuyProduct

const IndividualSummary = () => {
  const { data } = useGlobalContext();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [duration, setDuration] = useState(localStorage.getItem('duration'));

  useEffect(() => {
    const date = new Date();
    console.log(date);
    if (data) {
      const filterIncome = data.filter((obj) => obj.income);
      const filterExpense = data.filter((obj) => !obj.income);

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
