import React, { useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/Login.module.scss';
import Button from './Button';
import TextInput from './TextInput';
const LogIn = () => {
  const { setSingUp, setForgotPass, setLogin } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h2 className={classes.h2}>Login</h2>
      <form className={classes.form}>
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
