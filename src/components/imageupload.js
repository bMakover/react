import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Grid } from '@mui/material';

const ImageUploadCard = ({ setImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // useEffect(() => {
  //   if (selectedFile) {
  //     setImage(selectedFile);
  //   }
  // }, [selectedFile, setImage]);

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        // Set selectedFile for display
        setSelectedFile(reader.result);
  
        // Set resumeImage with the original file
        setImage(file);
      };
  
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ width: 200, margin: 'auto' }}>
      <Card>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              {selectedFile && (
                <img
                  src={selectedFile}
                  alt="Uploaded"
                  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                />
              )}
            </Grid>
            <br />
            <label htmlFor="image-upload-button">
              <Button variant="contained" component="span">
                {selectedFile ? 'Replace Image' : 'Select Image'}
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="image-upload-button"
                  multiple
                  type="file"
                  onChange={handleUploadClick}
                />
              </Button>
            </label>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUploadCard;
