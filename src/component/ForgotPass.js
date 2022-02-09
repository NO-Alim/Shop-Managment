import React, { useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/Login.module.scss';
import Button from './Button';
import TextInput from './TextInput';

const ForgotPass = () => {
  const { setSingUp, setForgotPass, setLogin } = useGlobalContext();
  const [email, setEmail] = useState('');
  return (
    <div>
      <h2 className={classes.h2}>Forgot Password</h2>
      <form className={classes.form}>
        <TextInput
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button exClass="blocked" type="submit">
          Next
        </Button>
      </form>
      <span
        className={classes.link}
        onClick={() => {
          setSingUp(false);
          setLogin(true);
          setForgotPass(false);
        }}
      >
        already have an Account ?
      </span>
      <span
        className={classes.link}
        onClick={() => {
          setSingUp(true);
          setLogin(false);
          setForgotPass(false);
        }}
      >
        Create an account
      </span>
    </div>
  );
};

export default ForgotPass;
