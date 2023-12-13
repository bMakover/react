import React from 'react';
import ShopItem from './shopItem';

const ShopList = (props) => {
  const { ar, onDeleteItem } = props;

  const handleDeleteItem = (item) => {
    onDeleteItem(item); // Remove the item from the list in the parent component
  };

  return (
    <div className='container'>
      <div className="row g-3">
        {ar.map((item, index) => (
          <ShopItem key={index} item={item} onDelete={handleDeleteItem} />
        ))}
      </div>
    </div>
  );
};

export default ShopList;
