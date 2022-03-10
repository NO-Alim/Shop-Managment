import React, { useState } from 'react';
import TextInput from '../component/TextInput';
import { useGlobalContext } from '../hook/AccountContext';

const EditModal = ({ currentItem }) => {
  const [name, setName] = useState(currentItem.name);
  const [price, setPrice] = useState(currentItem.price);
  const { EditData } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    currentItem.name = name;
    currentItem.price = price;
    currentItem.edited = true;
    EditData(currentItem.time.seconds, currentItem);
  };
  return (
    <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditModal;
