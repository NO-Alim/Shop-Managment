import React from 'react';
import classes from '../sass/DrawerTop.module.scss';

const DrawerTop = ({ children }) => {
  return <div className={classes.drawerTop}>{children}</div>;
};

export default DrawerTop;
