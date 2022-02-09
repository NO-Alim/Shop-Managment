import React from 'react';
import Nav from '../component/Nav';
import { NavProvider } from '../hook/DrawerContext';
import classes from '../sass/Home.module.scss';
import CustomerHome from './CustomerHome';
const Home = () => {
  return (
    <div className={classes.home}>
      <NavProvider>
        <Nav />
      </NavProvider>
      <CustomerHome />
    </div>
  );
};

export default Home;
