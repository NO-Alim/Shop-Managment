import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import Modal from 'react-modal';
import classes from '../sass/AddProduct.module.scss';
import ExpenseForm from './ExpenseForm';
import IncomeForm from './IncomeForm';

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

const AddProduct = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [income, setIncome] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   const resize = () => {
  //     if (window.innerWidth > 450) {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener('resize', resize);

  //   return () => {
  //     window.removeEventListener('resize', resize);
  //   };
  // }, []);
  return (
    <>
      <div className={classes.buttonContainer}>
        <button
          name="income"
          className="add"
          onClick={() => {
            openModal();
            setIncome(true);
          }}
        >
          <i>
            <FiPlus />{' '}
          </i>
          <span>Income</span>
        </button>
        <button
          name="expense"
          onClick={() => {
            openModal();
            setIncome(false);
          }}
        >
          <i>
            <FiMinus />
          </i>
          <span>Expense</span>
        </button>
      </div>
      <div className="modal">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example"
          ariaHideApp={false}
          className={classes.modal}
        >
          <div className={classes.content}>
            {income ? (
              <IncomeForm closeModal={closeModal} />
            ) : (
              <ExpenseForm closeModal={closeModal} />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddProduct;
