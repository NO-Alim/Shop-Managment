import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/MenuDrawer.module.scss';
import DrawerCloseBtn from './DrawerCloseBtn';
import DrawerTop from './DrawerTop';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
  drawerPaper: {
    width: 'auto',
    background: '#0b162a',
    color: '#fff',
    maxWidth: '350px',
    minWidth: '280px',
  },
});

const MenuDrawer = () => {
  const { menuDrawer, setMenuDrawer } = useNavContext();
  const handleCloseBtn = () => {
    setMenuDrawer(!menuDrawer);
  };
  const drawerClasses = useStyles();
  return (
    <>
      <Drawer
        className={classes.list}
        palette="secondary"
        variant="persistent"
        open={menuDrawer}
        anchor="left"
        //classes={{ paper: classes.draw }}
        classes={{ paper: drawerClasses.drawerPaper }}
      >
        <DrawerTop>
          <strong></strong>
          <DrawerCloseBtn handleCloseBtn={handleCloseBtn} />
        </DrawerTop>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
