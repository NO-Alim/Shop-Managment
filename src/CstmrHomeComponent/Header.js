import React from 'react';
import classes from '../sass/Header.module.scss';
import SelectOption from './SelectOption';

const Header = () => {
  const options = [
    { value: 'month', label: 'Last month' },
    { value: 'week', label: 'Last Week' },
    { value: 'Day', label: 'Last Day' },
  ];

  return (
    <>
      <header className={classes.header}>
        <div className={classes.shopBranding}>
          <h2>Good Morning, Arafat</h2>
          <span>Here's What's happening With Your Store Today.</span>
        </div>
        <div className={classes.selectDuration}>
          <SelectOption options={options} placeholder={'duration'} />
        </div>
      </header>
    </>
  );
};

export default Header;
