import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/AccountDrawer.module.scss';
import DrawerCloseBtn from './DrawerCloseBtn';
import DrawerPaper from './DrawerPaper';
import DrawerTop from './DrawerTop';
import ForgotPass from './ForgotPass';
import LogIn from './LogIn';
import SingUp from './SingUp';

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

const AccountDrawer = () => {
  const { accountDrawer, setAccountDrawer } = useNavContext();
  const { login, singUp, forgotPass } = useGlobalContext();
  //close Drawer
  const handleCloseBtn = () => {
    setAccountDrawer(!accountDrawer);
  };

  const drawerClasses = useStyles();
  return (
    <>
      <Drawer
        className={classes.list}
        palette="secondary"
        variant="persistent"
        open={accountDrawer}
        anchor="right"
        classes={{ paper: drawerClasses.drawerPaper }}
        //all paper class write in the MenuDrawer.module.scss
        //classes={{ paper: classes.draw }}
      >
        <>
          <DrawerTop>
            <DrawerCloseBtn handleCloseBtn={handleCloseBtn} />
          </DrawerTop>
          <DrawerPaper>
            {login && <LogIn />}
            {singUp && <SingUp />}
            {forgotPass && <ForgotPass />}
          </DrawerPaper>
        </>
      </Drawer>
    </>
  );
};

export default AccountDrawer;
