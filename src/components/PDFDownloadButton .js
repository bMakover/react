import React, { useContext } from 'react';
import { ResumeContext } from './ResumeContext';
import { generateResumePDF } from './pdfGenerationLogic'; // Import the PDF generation logic

const PDFDownloadButton = () => {
  const { state: { resumes } } = useContext(ResumeContext);

  const downloadPDF = () => {
    const latestResume = resumes.length > 0 ? resumes[resumes.length - 1] : null;

    if (latestResume) {
      generateResumePDF(latestResume);
    } else {
      alert('No resume available to download');
    }
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
};

export default PDFDownloadButton;
