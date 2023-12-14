import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import AppEmp from './comps/AppEmp'; 
import { SearchProvider } from './comps/searchContext';
import './styles.css'
const App = () => {
  return (
    
    <SearchProvider>
       <AppEmp/> 
      </SearchProvider>

  );
};

export default App;