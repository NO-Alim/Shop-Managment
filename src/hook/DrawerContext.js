import React, { useContext, useState } from 'react';

const NavContext = React.createContext();

const NavProvider = ({ children }) => {
  const [menuDrawer, setMenuDrawer] = useState(false);
  const [accountDrawer, setAccountDrawer] = useState(false);

  return (
    <NavContext.Provider
      value={{ menuDrawer, setMenuDrawer, accountDrawer, setAccountDrawer }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};

export { NavContext, NavProvider };
