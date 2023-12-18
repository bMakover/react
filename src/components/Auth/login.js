import React, { useState, useContext } from 'react';
import { auth, database } from '../../firebase'; // Import auth and database from firebase.js
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);

      // Get additional user data from Firebase if needed
      const userSnapshot = await database.ref(`users/${userCredential.user.uid}`).once('value');
      const userData = userSnapshot.val();

      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            // Other user data fetched from Firebase
            // For example:
            // fullName: userData.fullName || '',
            // age: userData.age || '',
          },
        },
      });

      console.log('User logged in successfully:', userCredential.user);
      navigate('/resumeform');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
