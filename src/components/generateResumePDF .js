import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver'; // For initiating download

export const generateResumePDF = (resumeData) => {
  // Create a div to hold the content to be converted to PDF
  const pdfContainer = document.createElement('div');

  // Populate the div with resume details (simplified example)
  pdfContainer.innerHTML = `
    <h1>Resume</h1>
    <p>Full Name: ${resumeData.fullName}</p>
    <p>Company: ${resumeData.workExperience.companyName}</p>
    <p>Time Frame: ${resumeData.workExperience.timeFrame}</p>
    <!-- Add other details as needed -->
  `;

  // Use html2canvas to capture the content as an image
  html2canvas(pdfContainer).then((canvas) => {
    // Convert the image to a PDF using jsPDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 210; // PDF width (in mm)
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjusting height to maintain aspect ratio

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    // Save the PDF file or initiate download
    pdf.save('resume.pdf');
    // Alternatively, if using FileSaver.js, you can initiate download like this:
    // saveAs(pdf.output('blob'), 'resume.pdf');
  });
};
