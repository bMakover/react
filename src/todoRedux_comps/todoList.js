import React from 'react'
import { useSelector } from "react-redux"

export default function TodoList() {
  const { todos_ar } = useSelector(store => store.todosSlice);

  return (
    <div className='container col-md-6'>
      <h2>List of Todos:</h2>
      <div className="row">
        {todos_ar.map(item => {
          return (
            <div key={item.id} className='col-md-11 my-2 border'>
              <h2>{item.name} - {item.time}</h2>
            </div>
          )
        })}
        {/*  */}
      </div>
    </div>
  )
}
