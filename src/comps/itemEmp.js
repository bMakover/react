import React from 'react'

const ItemEmp = (props) => {
    const item = props.item
  return (
    <div className='col border p-2 m-2'>
        <img src={item.avatar} alt="" />
        <h3 className="">name:{item.first_name}</h3>
        <h3 className="">country: {item.address.country}</h3>
        <h3 className="">phone number: {item.phone_number}</h3>
    </div>
  )
}

export default ItemEmp