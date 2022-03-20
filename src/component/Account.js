import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useGlobalContext } from '../hook/AccountContext';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/Account.module.scss';
const Account = () => {
  //should be come out from firebase
  const { setAccountDrawer } = useNavContext();
  const { currentUser, loading } = useGlobalContext();
  return (
    <div className={classes.accounts}>
      {currentUser ? (
        <div className={classes.account} onClick={() => setAccountDrawer(true)}>
          <span className={classes.icon}>
            <FaUserCircle />
            &nbsp;
          </span>
          <span className={classes.text}>{currentUser.displayName}</span>
        </div>
      ) : (
        <div className={classes.account} onClick={() => setAccountDrawer(true)}>
          <span className={classes.icon}>
            <FiLogIn />
            &nbsp;
          </span>
          <span className={classes.text}>LogIn/SingUp</span>
        </div>
      )}
    </div>
  );
};

export default Account;
