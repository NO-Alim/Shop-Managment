import React from 'react';
import Footer from '../component/Footer';
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
            {currentUser ? <CustomerHome /> : <Hero />}
            <Footer />
          </NavProvider>
        </>
      )}
    </div>
  );
};

export default Home;
