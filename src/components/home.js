import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
 import ResumeForm from './resumeForm'
import ResumeList from './resumeList';
const Home = () => {
 

 
  return (<>
    <ResumeList/>
   <ResumeForm/></>
  )
}
 
export default Home