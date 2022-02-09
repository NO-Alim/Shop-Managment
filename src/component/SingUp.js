import React, { useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/Login.module.scss';
import Button from './Button';
import TextInput from './TextInput';

const SingUp = () => {
  const { setSingUp, setForgotPass, setLogin } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <form className={classes.form}>
        <h2 className={classes.h2}>Create An Account</h2>
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
        <TextInput
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button exClass="blocked" type="submit">
          Submit
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
    </div>
  );
};

export default SingUp;
