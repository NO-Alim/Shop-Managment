import React from 'react';
import Select from 'react-select';
const options = [
  { value: 'month', label: 'Last month' },
  { value: 'week', label: 'Last Week' },
  { value: 'Day', label: 'Last Day' },
];

const SelectOption = () => {
  return (
    <>
      <Select options={options} />
    </>
  );
};

export default SelectOption;
