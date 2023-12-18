import React, { createContext, useReducer } from 'react';

const initialState = {
  resumes: [],
  // other resume-related data...
};

const ResumeContext = createContext();

const resumeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RESUME':
      return {
        ...state,
        resumes: [...state.resumes, action.payload],
      };
    case 'DELETE_RESUME':
      return {
        ...state,
        resumes: state.resumes.filter(resume => resume.id !== action.payload),
      };
    // other cases for resume updates...
    default:
      return state;
  }
};

const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeContext, ResumeProvider };
