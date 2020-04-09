import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCSZJjWJCk29yTdp4ynMGUyioJbOnuuWo",
  authDomain: "marioplan-cb3a9.firebaseapp.com",
  databaseURL: "https://marioplan-cb3a9.firebaseio.com",
  projectId: "marioplan-cb3a9",
  storageBucket: "marioplan-cb3a9.appspot.com",
  messagingSenderId: "480796490725",
  appId: "1:480796490725:web:f749d91104d6696e840d0c",
  measurementId: "G-0J1NELKYJT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;