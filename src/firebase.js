import firebase from 'firebase';


//intialize database

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCCz9t0S1k41hvEqSt9V6ktF_nm0TRPOvg",
  authDomain: "instagram-react-clone-osoro.firebaseapp.com",
  projectId: "instagram-react-clone-osoro",
  storageBucket: "instagram-react-clone-osoro.appspot.com",
  messagingSenderId: "74960741615",
  appId: "1:74960741615:web:429afdcf81050c7cd9271a",
  measurementId: "G-EVYR4ZC1NP"
});


  const db = firebaseApp.firestore(); //helps to access the databse
  const auth= firebase.auth(); //Access the authetication helps to log in and out 
  const storage = firebase.storage(); //Helps with the upload of pictures

  export {db, auth,storage};
