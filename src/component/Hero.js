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
            shop Manager, solution of your Shop management. you can keep your
            shop data in here, it's free and 100% secure. so let's get our
            services. Before jump in to add data you need to SingUp or if you
            have already SingUp let's login.
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
