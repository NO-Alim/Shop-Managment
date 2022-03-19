import React from 'react';
import Hero from '../component/Hero';
import Nav from '../component/Nav';
import { useGlobalContext } from '../hook/AccountContext';
import { NavProvider } from '../hook/DrawerContext';
import classes from '../sass/Home.module.scss';
import CustomerHome from './CustomerHome';
const Home = () => {
  const { loading, currentUser } = useGlobalContext();

  console.log(currentUser);
  return (
    <div className={classes.home}>
      {loading ? (
        <p>loading.....</p>
      ) : (
        <>
          <NavProvider>
            <Nav />
          </NavProvider>
          {currentUser ? <CustomerHome /> : <Hero />}
        </>
      )}
    </div>
  );
};

export default Home;
