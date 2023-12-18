import React from 'react';
import { Button, Grid, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '6rem' }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: '2rem' }}>
        Welcome to FocusApp
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('./signup')}
          >
            Register
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('./login')}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Entry;
