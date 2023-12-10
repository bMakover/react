import React, { useState } from 'react'

export default function Toggle() {
  const [showInfo,setShowInfo] = useState(false);


  const onShowInfo = () => {
    // טוגל זריז לבוליאן
    setShowInfo(!showInfo)
  }

  const para2 = () => {
    // ניתן לחלק את הג'יי אס אקס לפונקציות שמזמנים ברטרן
    return <p className='text-danger'>
      para 2 something para 2 something 6666
    </p>
  }

  return (
    <div className='container'>
      <h2>Info about something</h2>
      <button onClick={onShowInfo}>
        {(showInfo) ? "hide" : "show"} info</button>
      {
        (showInfo == true) ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nemo odit sequi architecto explicabo dolorem quidem nulla repellat magnam, possimus ipsam repellendus repudiandae enim distinctio a ea, et, dolores tempora! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nemo odit sequi architecto explicabo dolorem quidem nulla repellat magnam, possimus ipsam repellendus repudiandae enim distinctio a ea, et, dolores tempora!</p> : "123456"
      }



      {
        showInfo == true && <p>Lorem,  && </p>
      }

      
      {
        para2()
      }
    </div>
  )
}
