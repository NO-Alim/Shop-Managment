import React from 'react';
import { useGlobalContext } from '../hook/AccountContext';

const User = () => {
  const { currentUser, logoutFun } = useGlobalContext();

  return (
    <div>
      <div className="uername">
        <span>{currentUser.displayName}</span>
        <button onClick={logoutFun}>LogOut</button>
      </div>
    </div>
  );
};

export default User;
