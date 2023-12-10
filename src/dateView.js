import React, { useEffect, useState } from 'react'

// props -> אם נרצה להביא מהאבא פרופס נצטרך להעביר
// לפונקציה שלה הקומפנינטה פרמטר בשם פרופס
export default function DateView(props) {
  const [days,setDays] = useState(999);
  //useEffect
  // [] -> מערך ריק מקביל ל
  // componentDidMount - פועל פעם אחת שהקומפ מופיע
  // [props.deadline] -> מקביל ל
  // componentDidUpdate -> כאשר יש שינוי בפרופס של הדידליין
  // מהאבא
  useEffect(() => {
    calcDays(props.deadline);
  },[props.deadline])


  const calcDays = (_newDate) => {
    let time = Date.parse(_newDate) - Date.now();
    let newDays = Math.ceil(time/(1000*60*60*24))
    setDays(newDays);
  }
 
  return (
    <div className='text-center'>
      <h2>Countdown to: {props.deadline}</h2>
      <h3>Days left: {days}</h3>
    </div>
  )
}

