// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDG10vjkAU2pga8Gym_3qCNGEO81nCgB64",
  authDomain: "clone-3aa10.firebaseapp.com",
  projectId: "clone-3aa10",
  storageBucket: "clone-3aa10.appspot.com",
  messagingSenderId: "35130949150",
  appId: "1:35130949150:web:000248d369646da711f80f",
  measurementId: "G-XXL4RE38Y2",
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};