import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../firebase';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);
  const [singUp, setSingUp] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setLoading(true);
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function signupFun(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  function loginFun(email, password) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
  }

  function logoutFun() {
    const auth = getAuth();
    return signOut(auth);
  }
  return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        singUp,
        setSingUp,
        forgotPass,
        setForgotPass,
        currentUser,
        signupFun,
        loginFun,
        logoutFun,
        loading,
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
