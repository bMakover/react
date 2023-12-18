// Register.js

import React, { useState, useContext } from 'react';
import { auth } from '../../firebase'; // Import the auth object from your firebase.js file
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // ... rest of your registration logic
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="create your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
