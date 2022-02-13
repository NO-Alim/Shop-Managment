import React from 'react';
import { FaTimes } from 'react-icons/fa';
import TextInput from '../component/TextInput';
import classes from '../sass/IncomeExpenseForm.module.scss';
import SelectOption from './SelectOption';

const ExpenseForm = ({ closeModal }) => {
  const options = [
    { value: 'BuyProduct', label: 'Buy Product' },
    { value: 'KitchenCost', label: 'Kitchen Cost' },
    { value: 'MaintenanceCost', label: 'Maintenance Cost' },
    { value: 'salary', label: 'Salary' },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.btnContainer}>
        <button className={classes.closeBtn} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
      <form>
        <div className={classes.select}>
          <SelectOption options={options} placeholder={'category'} />
        </div>
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

export default ExpenseForm;
