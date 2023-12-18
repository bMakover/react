import React, {useState, useEffect} from 'react';
import Home from './components/home';
import Signup from './components/signUp';
import SignIn from './components/signIn';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 import Entry from './components/entry'
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                
            <Route path="/home" element={<Home/>}/>
               <Route path="/" element={<Entry/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<SignIn/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;