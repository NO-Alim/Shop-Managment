import React from 'react';
import GrapChart from '../CstmrHomeComponent/GrapChart';
import Header from '../CstmrHomeComponent/Header';
import IndividualSummary from '../CstmrHomeComponent/IndividualSummary';
import classes from '../sass/CustomerHome.module.scss';
const CustomerHome = () => {
  return (
    <main className={classes.main}>
      <div className="sectionContainer">
        <Header />
        <IndividualSummary />
        <GrapChart />
      </div>
    </main>
  );
};

export default CustomerHome;
