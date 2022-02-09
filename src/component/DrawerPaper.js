import React from 'react';
import classes from '../sass/DrawerPaper.module.scss';

const DrawerPaper = ({ children }) => {
  return <div className={classes.drawerPaper}>{children}</div>;
};

export default DrawerPaper;
