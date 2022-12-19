import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


import 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkJq0Xiq7v5H2Odm2ci0vhoUCYovQnDQ8",
  authDomain: "linkedin-clone-react-23173.firebaseapp.com",
  projectId: "linkedin-clone-react-23173",
  storageBucket: "linkedin-clone-react-23173.appspot.com",
  messagingSenderId: "256486034288",
  appId: "1:256486034288:web:f8b2811856fe73ad175db5"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
const db = firebase.firestore();
const auth = firebase.auth();

export default firebase;
export { db, auth };