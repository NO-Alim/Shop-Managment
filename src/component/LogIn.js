import React, { useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/Login.module.scss';
import Button from './Button';
import TextInput from './TextInput';
const LogIn = () => {
  const { setSingUp, setForgotPass, setLogin, loginFun } = useGlobalContext();
  const { setAccountDrawer, accountDrawer } = useNavContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await loginFun(email, password);
      setAccountDrawer(!accountDrawer);
    } catch (error) {
      setLoading(false);
      setError('failed to login!!');
    }
  };
  return (
    <div>
      <h2 className={classes.h2}>Login</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextInput
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Enter Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button exClass="blocked" type="submit">
          Login
        </Button>
        {error && <p className="accountError">{error}</p>}
      </form>
      <span
        className={classes.link}
        onClick={() => {
          setSingUp(true);
          setLogin(false);
          setForgotPass(false);
        }}
      >
        Don't have an account?
      </span>
      <span
        className={classes.link}
        onClick={() => {
          setSingUp(false);
          setLogin(false);
          setForgotPass(true);
        }}
      >
        Forgot Password ?
      </span>
    </div>
  );
};

export default LogIn;
