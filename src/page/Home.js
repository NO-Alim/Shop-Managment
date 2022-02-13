import React from 'react';
import Nav from '../component/Nav';
import { useGlobalContext } from '../hook/AccountContext';
import { NavProvider } from '../hook/DrawerContext';
import classes from '../sass/Home.module.scss';
import CustomerHome from './CustomerHome';
const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <div className={classes.home}>
      {loading ? (
        <p>loading.....</p>
      ) : (
        <>
          <NavProvider>
            <Nav />
          </NavProvider>
          <CustomerHome />
        </>
      )}
    </div>
  );
};

export default Home;
