// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import firebase from './firebase';
import { UserProvider } from './context/userContext';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import ResumeForm from './components/resumeForm';

// Other component imports...

const App = () => {
  return (
    <Router>
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resumeform" element={<ResumeForm />} />
      </Routes>
    </UserProvider>
  </Router>
  );
};

export default App;
