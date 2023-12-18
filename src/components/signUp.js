import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { TextField, Button, Typography, Container, Paper, Link } from '@mui/material';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <Typography variant="h5" component="h1" sx={{ marginBottom: '1rem', textAlign: 'center' }}>FocusApp</Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Email address"
            fullWidth
            variant="outlined"
            margin="normal"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: '1rem' }}
          >
            Sign up
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? {' '}
          <Link component={NavLink} to="/login" color="primary">
            Sign in
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;