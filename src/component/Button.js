import React from 'react';
import classes from '../sass/Button.module.scss';
const Button = ({ exClass, children }) => {
  return <button className={`${classes.button} ${exClass}`}>{children}</button>;
};

export default Button;
