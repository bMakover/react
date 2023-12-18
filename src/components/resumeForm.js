import React, { useState, useContext } from 'react';
import { ResumeContext } from '../context/resumesContext';

const ResumeForm = () => {
  const { dispatch: resumeDispatch } = useContext(ResumeContext);
  
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [educationDetails, setEducationDetails] = useState('');
  // ... other form fields and their respective useState hooks

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here, you'd dispatch an action to add the created resume to the context
    resumeDispatch({
      type: 'ADD_RESUME',
      payload: {
        fullName,
        workExperience: {
          companyName,
          timeFrame,
        },
        education: educationDetails,
        // ... other details to be added to the resume
      },
    });
    // You might also reset the form fields after submission
    setFullName('');
    setCompanyName('');
    setTimeFrame('');
    setEducationDetails('');
    // ... reset other form fields
  };

  return (
    <div>
      <h2>Resume Form</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for full name, work experience, education, etc. */}
        {/* Example: */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
           <input
          type="text"
          placeholder="company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
           <input
          type="text"
          placeholder="time Frame"
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        />
           <input
          type="text"
          placeholder="education Details"
          value={educationDetails}
          onChange={(e) => setEducationDetails(e.target.value)}
        />
        {/* Other input fields */}
        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
