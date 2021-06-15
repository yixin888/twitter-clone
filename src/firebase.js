import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQQ1eV5TpBfiGgFRvTNjuyEfwfrHpQi0c",
    authDomain: "twitter-clone-c96e6.firebaseapp.com",
    projectId: "twitter-clone-c96e6",
    storageBucket: "twitter-clone-c96e6.appspot.com",
    messagingSenderId: "839399829757",
    appId: "1:839399829757:web:002a212655dad21b3dce94",
    measurementId: "G-QKZQ0T07HD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db;