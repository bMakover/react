import React from 'react'
import ItemEmp from './itemEmp'

const ListEmp = (props) => {
  return (
    <div className="row">
        {props.ar.map(i =>{
            return <ItemEmp key={i.email} item={i} />
        })}
    </div>
  )
}

export default ListEmp