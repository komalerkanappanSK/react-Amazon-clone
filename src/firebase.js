import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjm0L0rpJdtsAtwzDuxzObidBqUqf2SU0",
  authDomain: "aclonemazon.firebaseapp.com",
  databaseURL: "https://aclonemazon.firebaseio.com",
  projectId: "aclonemazon",
  storageBucket: "aclonemazon.appspot.com",
  messagingSenderId: "1009528304673",
  appId: "1:1009528304673:web:6df6bbd7a894f5b04e1f60",
  measurementId: "G-FCYTYWR5KD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
