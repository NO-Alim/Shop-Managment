import React from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/Hero.module.scss';
const Hero = () => {
  const { accountDrawer, setAccountDrawer } = useNavContext();
  const { setSingUp, setForgotPass, setLogin, loginFun } = useGlobalContext();

  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.c1}></div>
        <main className={`sectionContainer ${classes.main}`}>
          <h1>Shop Manager</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            corporis molestias recusandae dolore sit magni perferendis ipsa.
            Exercitationem, atque perspiciatis beatae praesentium sint ipsa
            aspernatur.
          </p>
          <div className={classes.btnGroup}>
            <button
              onClick={() => {
                setAccountDrawer(true);
                setSingUp(true);
                setLogin(false);
              }}
            >
              SingUp
            </button>
            <button
              onClick={() => {
                setAccountDrawer(true);
                setLogin(true);
                setSingUp(false);
              }}
            >
              logIn
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
