// CreateCV.js

import React, { useState,useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { setFullName, addWorkExperience, addEducation } from '../features/CVSlice';

const CreateCV = () => {
  const dispatch = useDispatch();
  // const [fullName, setFullNameInput] = useState('');
  // const [workExperience, setWorkExperienceInput] = useState('');
  // const [education, setEducationInput] = useState('');
const{fullName,workExperience,education}=useSelector(myStore => myStore.cv)
  const handleFullNameChange = () => {
    dispatch(setFullName(fullName));
  };

  const handleAddWorkExperience = () => {
    dispatch(addWorkExperience(workExperience));
    // Logic to update work experience state
  };

  const handleAddEducation = () => {
    dispatch(addEducation(education));
    // Logic to update education state
  };

  // ... other handlers for image upload, additional info, etc.

  return (
    <div>
      <h2>Create CV</h2>
      <input type="text" placeholder="Full Name" value={fullName}  />
      <button onClick={handleFullNameChange}>Set Full Name</button>
      {/* Other input fields for work experience, education, image upload, etc. */}
      <button onClick={handleAddWorkExperience}>Add Work Experience</button>
      <button onClick={handleAddEducation}>Add Education</button>
      {/* Other buttons and input fields */}
    </div>
  );
};

export default CreateCV;
