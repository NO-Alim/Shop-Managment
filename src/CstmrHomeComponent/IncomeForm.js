import React from 'react';
import { FaTimes } from 'react-icons/fa';
import TextInput from '../component/TextInput';
import classes from '../sass/IncomeExpenseForm.module.scss';

const IncomeForm = ({ closeModal }) => {
  return (
    <div className={classes.main}>
      <div className={classes.btnContainer}>
        <button className={classes.closeBtn} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
      <form>
        <TextInput
          name="Product Name"
          type="text"
          placeholder="Product name"
          required
        />
        <TextInput name="Description" type="text" placeholder="Description" />
        <TextInput name="price" type="number" placeholder="$UAD" required />
        <button className={classes.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
