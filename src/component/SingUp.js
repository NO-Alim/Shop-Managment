import React, { useState } from 'react';
import { useGlobalContext } from '../hook/AccountContext';
import { useNavContext } from '../hook/DrawerContext';
import classes from '../sass/Login.module.scss';
import Button from './Button';
import TextInput from './TextInput';

const SingUp = () => {
  const { setSingUp, setForgotPass, setLogin } = useGlobalContext();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  //form accountContext
  const { signupFun } = useGlobalContext();
  const { accountDrawer, setAccountDrawer } = useNavContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError(`password doesn't match.`);
    }

    try {
      setError('');
      setLoading(true);

      await signupFun(email, password, userName);
      setAccountDrawer(!accountDrawer);
    } catch (error) {
      setLoading(false);
      setError(`Something error`);
    }
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.h2}>Create An Account</h2>
        <TextInput
          type="text"
          name="Name"
          placeholder="Enter User Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
          type="Password"
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
      {error && <p className="accountError">{error}</p>}
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
