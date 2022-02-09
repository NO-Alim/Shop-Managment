import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/Account.module.scss';
const Account = () => {
  //should be come out from firebase
  const [currentUser, setCurrentUser] = useState(true);
  const { setAccountDrawer } = useNavContext();

  return (
    <div className={classes.accounts}>
      {currentUser ? (
        <div className={classes.account}>
          <span className={classes.icon}>
            <FaUserCircle />
            &nbsp;
          </span>
          <span className={classes.text}>Alim</span>
        </div>
      ) : (
        <div className={classes.account} onClick={() => setAccountDrawer(true)}>
          <span className={classes.icon}>
            <FiLogIn />
            &nbsp;
          </span>
          <span className={classes.text}>LogIn</span>
        </div>
      )}
    </div>
  );
};

export default Account;
