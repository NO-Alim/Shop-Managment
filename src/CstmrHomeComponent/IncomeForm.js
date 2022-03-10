import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TextInput from '../component/TextInput';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/IncomeExpenseForm.module.scss';

const IncomeForm = ({ closeModal }) => {
  const { addData } = useGlobalContext();

  const thisDay = new Date();
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputState, setInputState] = useState({
    name: '',
    price: '',
    description: '',
    income: true,
    expanse: false,
    date: Timestamp.now().toDate().toDateString(),
    time: Timestamp.now(),
    edited: false,
    category: 'income',
  });

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
      date: Timestamp.now().toDate().toDateString(),
      time: Timestamp.now(),
      category: 'income',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(inputState);

    setInputState({
      name: '',
      price: '',
      description: '',
      income: true,
      expanse: false,
      date: Timestamp.now().toDate().toDateString(),
      time: Timestamp.now(),
      edited: false,
      category: 'income',
    });
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

export default IncomeForm;
