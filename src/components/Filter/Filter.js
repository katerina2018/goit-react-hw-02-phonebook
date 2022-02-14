import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        type="text"
        name="search"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
