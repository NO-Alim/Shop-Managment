import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [singUp, setSingUp] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        singUp,
        setSingUp,
        forgotPass,
        setForgotPass,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
