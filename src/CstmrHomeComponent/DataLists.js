import React from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/DataLists.module.scss';
import List from './List';
import ListHeader from './ListHeader';
const DataLists = () => {
  const { data } = useGlobalContext();
  return (
    <div className={classes.dataLists}>
      {data && data.length > 0 ? (
        <>
          <ListHeader />
          <List />
        </>
      ) : (
        <h2 className={classes.h2}>You haven't add data yet.</h2>
      )}
    </div>
  );
};

export default DataLists;
