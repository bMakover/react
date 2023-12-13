import React from 'react';

const ShopItem = (props) => {
  const { item, onDelete } = props;

  const handleDelete = () => {
    onDelete(item); // Pass the item to be deleted to the parent component
  };

  return (
    <div className='col-md-6'>
      <div className='shadow p-2 overflow-hidden h-100'>
        <p>
          {item.name} - {item.amount}
          <button onClick={handleDelete}>X</button>
        </p>
      </div>
    </div>
  );
};

export default ShopItem;
