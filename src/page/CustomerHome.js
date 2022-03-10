import React from 'react';
import AddProduct from '../CstmrHomeComponent/AddProduct';
import Chart from '../CstmrHomeComponent/Chart';
import DataLists from '../CstmrHomeComponent/DataLists';
import Header from '../CstmrHomeComponent/Header';
import IndividualSummary from '../CstmrHomeComponent/IndividualSummary';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/CustomerHome.module.scss';
const CustomerHome = () => {
  const { data } = useGlobalContext();
  return (
    <main className={classes.main}>
      <div className="sectionContainer">
        <Header />
        <IndividualSummary />
        <Chart />
        {data && <DataLists />}
        <AddProduct />
      </div>
    </main>
  );
};

export default CustomerHome;
