import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBkgC8XUjmztsHufwJd9ghiSNdcHRMqMoY",
  authDomain: "fir-auth-c3592.firebaseapp.com",
  databaseURL: "https://fir-auth-c3592.firebaseio.com",
  projectId: "fir-auth-c3592",
  storageBucket: "fir-auth-c3592.appspot.com",
  messagingSenderId: "442933354548",
  appId: "1:442933354548:web:d3479e0d9ec600823c2a61"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;