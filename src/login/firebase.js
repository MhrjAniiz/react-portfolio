import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD2wxvGIEAzH5RDDpKfLxXBq8WtRFLi62s",
  authDomain: "protfolio-7dd46.firebaseapp.com",
  databaseURL: "https://protfolio-7dd46.firebaseio.com",
  projectId: "protfolio-7dd46",
  storageBucket: "protfolio-7dd46.appspot.com",
  messagingSenderId: "1054738196588",
  appId: "1:1054738196588:web:8aab374eddb4f9844c9049"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default fire;

export {db};