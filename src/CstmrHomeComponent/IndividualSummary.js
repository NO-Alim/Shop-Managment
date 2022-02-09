import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { GiFruitBowl, GiReceiveMoney, GiShop } from 'react-icons/gi';
import classes from '../sass/IndividualSummary.module.scss';

const IndividualSummary = () => {
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
          <h1>$12343</h1>
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
          <h1>$12343</h1>
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
          <span className={classes.description}>Buy Goods</span>
          <h1>$12343</h1>
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
          <h1>$12343</h1>
        </div>
      </div>
    </div>
  );
};

export default IndividualSummary;
