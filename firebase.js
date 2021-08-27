import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6ViMs46qIFUm7YmtbKqabw56ir8JjakA",
    authDomain: "disney-clone-1780a.firebaseapp.com",
    projectId: "disney-clone-1780a",
    storageBucket: "disney-clone-1780a.appspot.com",
    messagingSenderId: "371255368456",
    appId: "1:371255368456:web:eb89b5e125a5359f182abd"
  };

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();

export { db };
