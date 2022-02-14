import React from 'react';

const ContactList = ({ value, onDeleteContant }) => {
  return (
    <ul>
      {value.map(({ id, name, number }) => (
        <li key={id} id={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContant(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
