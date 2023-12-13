import React, { useState } from 'react';
import ShopInput from './shopInput';
import ShopList from './shopList';

const ShopApp = () => {
  const [shopArr, setShopArr] = useState([]);

  const addItem = (name, amount) => {
    const newProduct = { name, amount };
    setShopArr([...shopArr, newProduct]);
  };

  const deleteItem = (itemToDelete) => {
    const updatedItems = shopArr.filter((item) => item !== itemToDelete);
    setShopArr(updatedItems);
  };

  return (
    <>
      <ShopInput addItem={addItem} />
      <ShopList ar={shopArr} onDeleteItem={deleteItem} />
    </>
  );
};

export default ShopApp;
