import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '../firebase'; // Import your Firebase setup
const initialState = {
  fullName: '',
  workExperience: [],
  education: [],
  // Add other CV-related fields here
};
export const saveCVData = createAsyncThunk('cv/saveCVData', async (cvData, { rejectWithValue }) => {
    try {
      // Save CV data to Firestore
      await firestore.collection('resumes').add(cvData); // Assuming 'resumes' is your collection
  
      return cvData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
const cvSlice = createSlice({
  name: "cv",
  initialState: initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    addWorkExperience: (state, action) => {
      state.workExperience.push(action.payload);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    // Define other CV-related actions here
  },
  extraReducers: (builder) => {
    builder.addCase(saveCVData.fulfilled, (state, action) => {
      // Optionally update state or handle success
      // For example, clear the state after saving successfully
      return initialState;
    });
    // Add other cases if needed for error handling, pending state, etc.
  },
});

export const { setFullName, addWorkExperience, addEducation } = cvSlice.actions;

export default cvSlice.reducer;
