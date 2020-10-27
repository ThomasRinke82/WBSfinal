import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqVHH47mhMA72ehD9yVAXOEd9rvoHzV0Q",
  authDomain: "final-project-wbs.firebaseapp.com",
  databaseURL: "https://final-project-wbs.firebaseio.com",
  projectId: "final-project-wbs",
  storageBucket: "final-project-wbs.appspot.com",
  messagingSenderId: "203329430532",
  appId: "1:203329430532:web:b93908b1c286c8fe0a0151",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
