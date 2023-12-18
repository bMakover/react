// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCmcDL7hSdS4D7fML2SbutUEVBTvChOKqg",
  authDomain: "cv-project-fd3f7.firebaseapp.com",
  projectId: "cv-project-fd3f7",
  storageBucket: "cv-project-fd3f7.appspot.com",
  messagingSenderId: "443238985317",
  appId: "1:443238985317:web:06d52553a4fe9e38f6208c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Authentication
const database = getDatabase(app);

export { app, auth, database }; // Exporting app, auth, and database
