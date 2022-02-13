import React, { useState } from 'react';
import { FiPrinter, FiSearch } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import classes from '../sass/ListHeader.module.scss';
import SelectOption from './SelectOption';
const ListHeader = () => {
  const options = [
    { value: 'date', label: 'Date' },
    { value: 'price', label: 'Price' },
  ];

  const [selectCount, setSelectCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  return (
    <div className={classes.listHeader}>
      <div className={classes.doSomething}>
        <div className={classes.selectCount}>
          <span>{selectCount} Product Selected</span>
        </div>
        <div className={classes.icons}>
          <span className="icon">
            <i>
              <FiPrinter />
            </i>
          </span>
          <span className="icon">
            <i>
              <RiDeleteBin6Line />
            </i>
          </span>
        </div>
      </div>
      <div className={classes.userControl}>
        <div className={classes.sort}>
          <SelectOption options={options} placeholder={'sort'} />
        </div>
        <form>
          <button>
            <FiSearch />
          </button>
          <input
            type="text"
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Product"
          />
        </form>
      </div>
    </div>
  );
};

export default ListHeader;
