import React from 'react';
import classes from '../sass/TextInput.module.scss';
const TextInput = ({ name, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <label htmlFor={name} className={classes.label}>
        {name}
      </label>
      <input name={name} {...rest} className={classes.input} />
    </div>
  );
};

export default TextInput;
