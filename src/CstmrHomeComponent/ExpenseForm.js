import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TextInput from '../component/TextInput';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/IncomeExpenseForm.module.scss';
import SelectOption from './SelectOption';

const options = [
  { value: 'BuyProduct', label: 'Buy Product' },
  { value: 'KitchenCost', label: 'Kitchen Cost' },
  { value: 'MaintenanceCost', label: 'Maintenance Cost' },
  { value: 'salary', label: 'Salary' },
];

const ExpenseForm = ({ closeModal }) => {
  const thisDay = new Date();
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputState, setInputState] = useState({
    name: '',
    price: '',
    description: '',
    income: false,
    expanse: true,
    date: Timestamp.now().toDate().toDateString(),
    time: Timestamp.now(),
    edited: false,
    category: selectedOption,
  });

  const { addData } = useGlobalContext();

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
      date: Timestamp.now().toDate().toDateString(),
      time: Timestamp.now(),
      category: selectedOption,
    });
  };

  const handleSelect = (e) => {
    setSelectedOption(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(inputState);

    setInputState({
      name: '',
      price: '',
      description: '',
      income: false,
      expanse: true,
      date: Timestamp.now().toDate().toDateString(),
      time: Timestamp.now(),
      edited: false,
      category: '',
    });
    setSelectedOption(null);
    closeModal();
  };

  return (
    <div className={classes.main}>
      <div className={classes.btnContainer}>
        <button className={classes.closeBtn} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.select}>
          <SelectOption
            options={options}
            placeholder="category"
            value={selectedOption}
            onChange={(e) => handleSelect(e)}
            required
          />
        </div>
        <TextInput
          name="name"
          type="text"
          placeholder="Product name"
          value={inputState.name}
          onChange={handleChange}
          required
        />
        <TextInput
          name="description"
          type="text"
          placeholder="Description"
          value={inputState.description}
          onChange={handleChange}
        />
        <TextInput
          name="price"
          type="number"
          placeholder="$UAD"
          value={inputState.price}
          onChange={handleChange}
          required
        />
        <button className={classes.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
