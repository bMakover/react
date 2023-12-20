import React, { useState, useRef } from 'react';
import { auth, database,storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Grid, Paper, Typography, Button,TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';
import ImageUpload from "./imageupload";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Storage methods specifically
import { MuiColorInput } from 'mui-color-input'
const ResumeForm = () => {
  const [fullName, setFullName] = useState('');
  const [workExperience, setWorkExperience] = useState({ companyName: '', timeFrame: '' });
  const [workExperiences, setWorkExperiences] = useState([workExperience]);
  const [educationDetail, setEducationDetail] = useState({ institution: '', degree: '' });
  const [educationDetails, setEducationDetails] = useState([educationDetail]);
  const [submitted, setSubmitted] = useState(false);
  const [resumeImage, setResumeImage] = useState(null);
  const [JobDescription,setJobDescription]=useState();
  const [buttonText, setButtonText] = useState('Generate Resume');
  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5'); // Default background color
  const [fontColor, setFontColor] = useState('#000000'); // Default font color
  const [fontSize, setFontSize] = useState('16px'); // Default font size
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif'); // Default font family
  const [imgUrl, setImgUrl] = useState('');
  const resumeRef = useRef(null);
  const upload = async () => {
    if (!resumeImage) return;

    try {
      const storageRef = ref(storage, `images/${resumeImage.name}`);
      await uploadBytes(storageRef, resumeImage);
      const imageUrl = await getDownloadURL(storageRef);
console.log(imageUrl)
      // Set the image URL in the component state
      setImgUrl(imageUrl);
      console.log(imgUrl);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Function to set the uploaded image in state
  const handleSetImage = (image) => {
    setResumeImage(image);
  };
  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setSubmitted(true);
    setButtonText('Save Changes');
    const uploadedUrl = await upload(); // This will set the image URL in the component state
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;

        try {


      const resumeData = {
        userId,
        fullName,
        experience: workExperiences,
        education: educationDetails,
        imageUrl: uploadedUrl || '', // Store the image URL in Firestore
        design: {
          backgroundColor,
          fontColor,
          fontSize,
          fontFamily,
        },
      };
          const docRef = await addDoc(collection(database, 'resumes'), resumeData);
          console.log('Resume added with ID: ', docRef.id);
        } catch (error) {
          console.error('Error adding resume: ', error);
        }
      }
    });
  };

  const downloadAsPDF = () => {
    if (resumeRef.current) {
      html2canvas(resumeRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgHeight = (canvas.height * 208) / canvas.width;
        pdf.addImage(imgData, 0, 0, 208, imgHeight);
        pdf.save('resume.pdf');
      });
    }
  };


  const handleAddWorkExperience = () => {
    setWorkExperiences([...workExperiences, { companyName: '', timeFrame: '' }]);
  };

  const handleAddEducationDetail = () => {
    setEducationDetails([...educationDetails, { institution: '', degree: '' }]);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} md={8} lg={6}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <div>
            <h2>Resume Form</h2>
            <form onSubmit={handleFormSubmit}>
              <TextField
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                type="text"
                placeholder="Job Description"
                value={JobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <br/>
              <br/>

              {/* Work Experience */}
             <h5>Experience</h5>  
              {workExperiences.map((experience, index) => (
                <div key={index}>
                  <TextField
                    type="text"
                    placeholder="Company Name"
                    value={experience.companyName}
                    onChange={(e) => {
                      const updatedWorkExperiences = [...workExperiences];
                      updatedWorkExperiences[index].companyName = e.target.value;
                      setWorkExperiences(updatedWorkExperiences);
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    placeholder="Time Frame"
                    value={experience.timeFrame}
                    onChange={(e) => {
                      const updatedWorkExperiences = [...workExperiences];
                      updatedWorkExperiences[index].timeFrame = e.target.value;
                      setWorkExperiences(updatedWorkExperiences);
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </div>
              ))}
              <Button variant="contained" onClick={handleAddWorkExperience}>Add Work Experience</Button>
<br/>
<br/>
              {/* Education Details */}
              <h5>Education</h5>
              {educationDetails.map((detail, index) => (
                <div key={index}>
                  <TextField
                    type="text"
                    placeholder="Institution"
                    value={detail.institution}
                    onChange={(e) => {
                      const updatedEducationDetails = [...educationDetails];
                      updatedEducationDetails[index].institution = e.target.value;
                      setEducationDetails(updatedEducationDetails);
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    placeholder="Degree"
                    value={detail.degree}
                    onChange={(e) => {
                      const updatedEducationDetails = [...educationDetails];
                      updatedEducationDetails[index].degree = e.target.value;
                      setEducationDetails(updatedEducationDetails);
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                    <Button variant="contained" onClick={handleAddEducationDetail}>Add Education</Button>

            </div>
              ))}
               {/* Design customization options */}
               <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h6">Design Customization</Typography>
            <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
              
            <MuiColorInput value={backgroundColor}
   label="Background Color"
  onChange={(color) => setBackgroundColor(color)}
 />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
            <MuiColorInput 
              labelId="font-color-label"
                value={fontColor}
                label="Font Color"
                onChange={(color) => setFontColor(color)}
 />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
              <InputLabel id="font-family-label">Font Family</InputLabel>
              <Select
                labelId="font-family-label"
                value={fontFamily}
                label="Font Family"
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <MenuItem value="Arial, sans-serif">Arial, sans-serif</MenuItem>
                <MenuItem value="Helvetica, sans-serif">Helvetica, sans-serif</MenuItem>
                <MenuItem value="Georgia, serif">Georgia, serif</MenuItem>
                {/* Add more font family options */}
              </Select>
              </FormControl>
              </div>

 <ImageUpload  setImage={handleSetImage} />    
              <Button type="submit" variant="contained">{buttonText}</Button>
            </form>

           
            {submitted && (
              <>
              <div ref={resumeRef}  style={{
                fontFamily: fontFamily,
                backgroundColor,
                color: fontColor,
                fontSize,
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}>
              {resumeImage && ( 
        <img
          src={URL.createObjectURL(resumeImage)}
          alt="Resume Image"
          style={{
            borderRadius: '50%',
            marginRight: '20px',
            width: '100px', 
            height: '100px', 
          }}
        />
      )}
               <div>
                <h2 style={{ textAlign: 'center' }}>{fullName}</h2>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }} >{JobDescription}</h3>
</div>
        
                <div style={{ marginBottom: '20px' }}>
                  <h3>Work Experience</h3>
                  {workExperiences.map((experience, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                      <p><strong>Company Name:</strong> {experience.companyName}</p>
                      <p><strong>Time Frame:</strong> {experience.timeFrame}</p>
                      {/* Other work experience details can be added here */}
                    </div>
                  ))}
                </div>
                <div>
                  <h3>Education</h3>
                  {educationDetails.map((detail, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                      <p><strong>Institution:</strong> {detail.institution}</p>
                      <p><strong>Degree:</strong> {detail.degree}</p>
                      {/* Other education details can be added here */}
                    </div>
                  ))}
                </div>

              </div>
              
              <Button onClick={downloadAsPDF}>Download as PDF</Button></>
              )
          }

          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ResumeForm;
