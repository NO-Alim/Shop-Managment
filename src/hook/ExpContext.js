import React, { useContext, useState } from 'react';

const HelloContext = React.createContext();

const ExProvider = ({ children }) => {
  const [exLoading, setExLoading] = useState('hello');
  return (
    <HelloContext.Provider value={{ exLoading }}>
      {children}
    </HelloContext.Provider>
  );
};

export const useExContext = () => {
  return useContext(HelloContext);
};

export { HelloContext, ExProvider };
