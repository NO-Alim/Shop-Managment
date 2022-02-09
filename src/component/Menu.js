import React from 'react';
import { FiMenu } from 'react-icons/fi';
import '../sass/Menu.module.scss';
const menu = ({ handleMenu }) => {
  return (
    <>
      <span onClick={handleMenu}>
        <FiMenu />
      </span>
    </>
  );
};

export default menu;
