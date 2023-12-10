import React, { useRef } from 'react'

export default function DateInput(props) {
  // כדי לאסוף מידע מאינפוט
  // inputRef = React.createRef()
  // מקביל לשורה למעלה
  const inputRef = useRef();
  // const inputRef1 = useRef();

  const onChangeDate = () => {
    props.setDeadline(inputRef.current.value);
  }

  return (
    <div className='col-md-4 mx-auto d-flex'>
      <input ref={inputRef} defaultValue={"2025-01-01"} type="date" className='form-control'/>
      <button onClick={onChangeDate}>Change</button>
    </div>
  )
}
