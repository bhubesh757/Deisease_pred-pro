import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAnLg7_bMt2u_vFXHEttfuGPhkw_dqpy48",
    authDomain: "dispredo-a28f4.firebaseapp.com",
    projectId: "dispredo-a28f4",
    storageBucket: "dispredo-a28f4.appspot.com",
    messagingSenderId: "513737489147",
    appId: "1:513737489147:web:aeba886a12cb4c6d5c8e5e"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const login = firebase.login()

  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db , auth , provider };

  export default firebase