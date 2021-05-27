import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTPAi9CpWo1YAkXtVgKOxcLbbbvdEXlU",
  authDomain: "chattr-e08d2.firebaseapp.com",
  projectId: "chattr-e08d2",
  storageBucket: "chattr-e08d2.appspot.com",
  messagingSenderId: "956822677436",
  appId: "1:956822677436:web:a299e1686b71d269eaedb9",
  measurementId: "G-HNWN49YPQT",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };

