import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAaIK0zr4s_jzaJxWuIdHYwIBALubrHOlc",
    authDomain: "tinder-clone-efee6.firebaseapp.com",
    databaseURL: "https://tinder-clone-efee6.firebaseio.com",
    projectId: "tinder-clone-efee6",
    storageBucket: "tinder-clone-efee6.appspot.com",
    messagingSenderId: "819560940166",
    appId: "1:819560940166:web:5e9016cc4106aed8af8707",
    measurementId: "G-Q00DX8P5WG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore();

  export default database;