import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TextInput from '../component/TextInput';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/EditModal.module.scss';

const EditModal = ({ currentItem, closeModal }) => {
  const [name, setName] = useState(currentItem.name);
  const [price, setPrice] = useState(currentItem.price);
  const { EditData } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    currentItem.name = name;
    currentItem.price = price;
    currentItem.edited = true;
    EditData(currentItem.time.seconds, currentItem);
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
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          name="price"
          type="number"
          placeholder="$UAD"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button className={classes.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditModal;
