import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useGlobalContext } from '../hook/AccountContext';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/User.module.scss';
const User = () => {
  const { currentUser, logoutFun } = useGlobalContext();
  const { setAccountDrawer, accountDrawer } = useNavContext();

  return (
    <div>
      <div className={classes.user}>
        <h3 className={classes.userName}>{currentUser.displayName}</h3>
        <button
          className={classes.btn}
          onClick={() => {
            logoutFun();
            setAccountDrawer(!accountDrawer);
          }}
        >
          <i>
            <FiLogOut />
          </i>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default User;
