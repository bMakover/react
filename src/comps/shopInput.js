import React, { useRef } from 'react';

const ShopInput = (props) => {
  const inpNameRef = useRef();
  const inpAmountRef = useRef();

  const onAddClick = () => {
    props.addItem(inpNameRef.current.value, inpAmountRef.current.value);
    inpNameRef.current.value = ''; // Clear input fields after adding the item
    inpAmountRef.current.value = '';
  };

  return (
    <div className='container'>
      <label>Name:</label>
      <input ref={inpNameRef} type="text" />
      <label>Amount:</label>
      <input ref={inpAmountRef} type="text" />
      <button onClick={onAddClick} className='btn btn-info'>
        Add
      </button>
    </div>
  );
};

export default ShopInput;
