import React, { useContext } from 'react';
import { ResumeContext } from './ResumeContext';

const ResumePreview = () => {
  const { state: { resumes } } = useContext(ResumeContext);

  // For simplicity, assuming you're displaying the latest created resume
  const latestResume = resumes.length > 0 ? resumes[resumes.length - 1] : null;

  return (
    <div>
      <h2>Resume Preview</h2>
      {latestResume ? (
        <div>
          {/* Display the preview of the latest created resume */}
          <p>Full Name: {latestResume.fullName}</p>
          <p>Company: {latestResume.workExperience.companyName}</p>
          <p>Time Frame: {latestResume.workExperience.timeFrame}</p>
          {/* Display other details */}
        </div>
      ) : (
        <p>No resume created yet</p>
      )}
    </div>
  );
};

export default ResumePreview;
