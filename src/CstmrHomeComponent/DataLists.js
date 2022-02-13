import React from 'react';
import classes from '../sass/DataLists.module.scss';
import List from './List';
import ListHeader from './ListHeader';
import ListPagination from './ListPagination';
const DataLists = () => {
  return (
    <div className={classes.dataLists}>
      <ListHeader />
      <List />
      <ListPagination />
    </div>
  );
};

export default DataLists;
