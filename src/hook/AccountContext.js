import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
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
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    setLoading(true);
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      getData();
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('duration')) {
      localStorage.setItem('duration', 'day');
    }
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

    //create a firestore

    try {
      await setDoc(doc(db, 'user', user.uid), {
        bio: [
          {
            name: user.displayName,
            userId: user.uid,
            email: user.email,
          },
        ],
        data: [],
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  function loginFun(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logoutFun() {
    return signOut(auth);
  }

  const getData = async () => {
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, 'user', user.uid);

      try {
        setLoading(true);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data().data);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const addData = async (arg) => {
    const user = auth.currentUser;
    const docRef = doc(db, 'user', user.uid);

    try {
      await updateDoc(docRef, {
        data: arrayUnion(arg),
      });
    } catch (error) {
      console.log(error.message);
    }

    //after adding data callback getData
    getData();
  };

  const Delete = async (id) => {
    const user = auth.currentUser;
    const docRef = doc(db, 'user', user.uid);

    const updateData = data.filter((item) => item.time.seconds !== id);

    try {
      await updateDoc(docRef, {
        data: updateData,
      });
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const DeleteList = async (IdArr) => {
    // const list = data.filter((obj) => {
    //   return IdArr.includes(obj.time.seconds.toString());
    // });

    const user = auth.currentUser;
    const docRef = doc(db, 'user', user.uid);

    const list = data.filter((obj) =>
      IdArr.every((id) => id !== obj.time.seconds.toString())
    );

    try {
      await updateDoc(docRef, {
        data: list,
      });
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const EditData = async (id, setThis) => {
    const user = auth.currentUser;
    const docRef = doc(db, 'user', user.uid);

    const EditedDataIndex = data.findIndex((obj) => obj.time.seconds === id);
    const allData = data;
    allData[EditedDataIndex] = setThis;

    try {
      await updateDoc(docRef, {
        data: allData,
      });
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  // This is dommy function nothing will be happen when call

  const queryData = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, 'user', user.uid);
      //remove user.uid
      //const q = query(docRef, where('income', '==', true));

      try {
        const col = collection(db, 'user');
        const x = query(col, where('data', 'array-contains', 'hi', '==', true));

        console.log(x);
      } catch (error) {
        console.log(error);
      }
    }
  };

  //query hack

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
        addData,
        data,
        Delete,
        EditData,
        checkedItems,
        setCheckedItems,
        DeleteList,
        queryData,
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
