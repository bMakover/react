import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmcDL7hSdS4D7fML2SbutUEVBTvChOKqg",
    authDomain: "cv-project-fd3f7.firebaseapp.com",
    projectId: "cv-project-fd3f7",
    storageBucket: "cv-project-fd3f7.appspot.com",
    messagingSenderId: "443238985317",
    appId: "1:443238985317:web:06d52553a4fe9e38f6208c"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
