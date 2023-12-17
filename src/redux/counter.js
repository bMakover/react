import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { add1, resetCounter, addCustom } from '../features/counterSlice';

export default function Counter() {
  // const myCounter = useSelector((myStore) => myStore.counterSlice.counter)
  
  // dispatch-> פונקציה שתאפשר לשגר את האקשן שייבאנו
  const dispatch = useDispatch();
  const {counter,user} = useSelector(myStore => myStore.counterSlice)

  return (
    <div className='container'>
      <h2>Counter: {counter}</h2>
      <button onClick={() => {
        dispatch(add1());
      }}>Add 1</button>
      <button onClick={() => {
        dispatch(resetCounter())
      }}>Reset all</button>
      <button onClick={() => {
        dispatch(addCustom({val:5}))
      }}>Add 5</button>
      <button onClick={() => {
        dispatch(addCustom({val:-6}))
      }}>reduce 6</button>
      <h3>User:{user}</h3>
    </div>
  )
}
