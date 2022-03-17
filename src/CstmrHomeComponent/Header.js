import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/Header.module.scss';
import SelectOption from './SelectOption';

const Header = () => {
  const options = [
    { value: 'month', label: 'Last month' },
    { value: 'year', label: 'Last year' },
    { value: 'day', label: 'Today Day' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[2]);
  const { setDuration } = useGlobalContext();

  const handleSelect = async (e) => {
    setSelectedOption(e);
    localStorage.setItem('duration', e.value);
    setDuration(e.value);
  };

  //if there is already have localstorage duration setselected value
  useEffect(() => {
    if (localStorage.getItem('duration')) {
      const local = localStorage.getItem('duration');
      const indx = options.filter((item) => item.value === local);
      setSelectedOption(indx);
    }
  }, []);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.shopBranding}>
          <h2>Good Morning, Arafat</h2>
          <span>Here's What's happening With Your Store Today.</span>
        </div>
        <div className={classes.selectDuration}>
          <SelectOption
            options={options}
            placeholder={'duration'}
            value={selectedOption}
            onChange={(e) => handleSelect(e)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
