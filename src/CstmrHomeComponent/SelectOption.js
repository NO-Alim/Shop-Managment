import React from 'react';
import Select from 'react-select';
const colourStyles = {
  menuList: (styles) => ({
    ...styles,
    background: '#75efff',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? '#fff' : '#101c31',
    background: isFocused ? '#101c31' : isSelected ? 'yellow' : undefined,
    zIndex: 1,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
  control: (styles) => ({
    ...styles,
    background: '#101c31',
    borderColor: '#75efff',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#ccc',
  }),
};

const SelectOption = ({ options, placeholder, ...rest }) => {
  return (
    <>
      <Select
        placeholder={placeholder}
        options={options}
        styles={colourStyles}
        {...rest}
      />
    </>
  );
};

export default SelectOption;
