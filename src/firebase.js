import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBskLdBR-Ac18qW-E2mkon8_3K--QgWSJE",
  authDomain: "netflix-clone-f4bdc.firebaseapp.com",
  projectId: "netflix-clone-f4bdc",
  storageBucket: "netflix-clone-f4bdc.appspot.com",
  messagingSenderId: "928365092583",
  appId: "1:928365092583:web:05ede2843f726604d84c42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// real time database
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
