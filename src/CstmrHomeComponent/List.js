import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Modal from 'react-modal';
import EditModal from '../component/EditModal';
import { useGlobalContext } from '../hook/AccountContext';
import classes from '../sass/List.module.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#101c31',
  },
};

const List = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const { data, Delete, checkedItems, setCheckedItems } = useGlobalContext();
  //const sec = 1646594396;

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleChecked = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedItems([...checkedItems, e.target.value]);
    } else {
      const filteredArr = checkedItems.filter((x) => x !== e.target.value);
      setCheckedItems(filteredArr);
    }
  };

  return (
    <div className={classes.list}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.name}>Product</th>
            <th className={classes.date}>Added Date</th>
            <th className={classes.time}>Time</th>
            <th className={classes.price}>Price</th>
            <th className={classes.info}>More</th>
          </tr>
        </thead>
        {data &&
          data.map((item, ind) => {
            return (
              <tbody key={ind}>
                <tr>
                  <td className={classes.name}>
                    <span>
                      <input
                        type="checkbox"
                        value={item.time.seconds}
                        onChange={handleChecked}
                      />{' '}
                    </span>{' '}
                    {item.name}
                  </td>
                  <td className={classes.date}>{item.date}</td>
                  <td className={classes.time}>
                    {new Date(item.time.seconds * 1000).getHours()}:
                    {new Date(item.time.seconds * 1000).getMinutes()}
                  </td>
                  <td
                    className={`${classes.price} ${
                      item.expanse ? 'ex-price' : ''
                    }`}
                  >
                    {`${item.expanse ? '-' : ' '}`}$
                    {parseFloat(item.price).toFixed(2)}
                  </td>
                  <td className={classes.info}>
                    <span
                      onClick={() => {
                        openModal();
                        setCurrentItem(item);
                      }}
                    >
                      <i>
                        <FaEdit />
                      </i>
                    </span>

                    <span onClick={() => Delete(item.time.seconds)}>
                      <i>
                        <RiDeleteBin6Line />
                      </i>
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
        ariaHideApp={false}
        className={classes.modal}
      >
        <div className={classes.content}>
          <EditModal currentItem={currentItem} />
        </div>
      </Modal>
    </div>
  );
};

export default List;
