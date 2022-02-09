import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import classes from '../sass/DrawerCloseBtn.module.scss';
const DrawerCloseBtn = ({ handleCloseBtn }) => {
  return (
    <>
      <span className={classes.drawerCloseBtn} onClick={() => handleCloseBtn()}>
        <RiCloseFill />
      </span>
    </>
  );
};

export default DrawerCloseBtn;
