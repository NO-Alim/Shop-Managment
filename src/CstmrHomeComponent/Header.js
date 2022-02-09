import React from 'react';
import classes from '../sass/Header.module.scss';
import SelectOption from './SelectOption';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.shopBranding}>
          <h2>Good Morning, Arafat</h2>
          <span>Here's What's happening With Your Store Today.</span>
        </div>
        <div className={classes.selectDuration}>
          <SelectOption />
        </div>
      </header>
    </>
  );
};

export default Header;
