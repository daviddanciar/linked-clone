import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6dwn4TJquhp0w1Yj0Ya_GsVO83RJ8NMI",
  authDomain: "linkedin-ef2de.firebaseapp.com",
  projectId: "linkedin-ef2de",
  storageBucket: "linkedin-ef2de.appspot.com",
  messagingSenderId: "482110880801",
  appId: "1:482110880801:web:60502d34b70eb2c9033760",
  measurementId: "G-Q30104X2EV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
